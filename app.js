if(process.env.NODE_ENV!="production"){
  require('dotenv').config()
}

const express=require("express");
const mongoose=require("mongoose");
const ejs=require('ejs')
const path=require('path')
const methodOverride=require('method-override');
const engine=require('ejs-mate');
const ExpressError=require('./utils/ExpressError.js')
const session=require('express-session')
const MongoStore = require('connect-mongo');
const flash=require('connect-flash')
const passport=require('passport')
const LocalStrategy=require('passport-local')

const User=require('./models/user.js')
const listingRouter=require('./routes/listingRoute.js');
const reviewRouter=require('./routes/reviewRoute.js')
const userRouter=require('./routes/userRouter.js');
const homeRouter=require('./routes/homeRoute.js')

const app=express();
const port=8080;


app.engine('ejs', engine);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views')); 
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'public')));


const dbURL=process.env.ATLAS_DB
main().then(()=>{
    console.log("Monogo DB connected")
}
)
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(`${dbURL}`);
}
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

const store = MongoStore.create({
  mongoUrl: dbURL,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600, 
});

store.on('error', (err) => {
  console.log('Session store error', err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000, 
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user
    next();
})

//home route
app.get('/',homeRouter)

//listing route
app.use('/listings',listingRouter);

//review route
app.use('/listings/:id/reviews',reviewRouter)

app.use('/',userRouter);

app.all('*',(req,res)=>{
    throw new ExpressError(404,"page not found");
})

app.use((err,req,res,next)=>{
    const {status,message}=err;
    res.render('listings/error.ejs',{status,message});
})
