const User=require('../models/user.js')
const Listing=require('../models/listing.js');
module.exports.renderSignup=(req,res)=>{
    res.render("users/signup.ejs");
}

module.exports.signup=async (req,res,next)=>{
    try{
        const {username,email,password}=req.body
        let newUser=new User({email,username});
        let registerUser=await User.register(newUser,password);
        req.login(registerUser,(err)=>{
            if(err) return next(err);
            req.flash("success","Welcome to our platform")
            res.redirect('/listings')
        })
    }
    catch(e){
        req.flash("error",e.message)
        res.redirect('/signup')
    }
}

module.exports.renderLogin=(req,res)=>{
    res.render("users/login.ejs");
}

module.exports.login=(req,res)=>{
    req.flash("success","Logged in successfully")
    let redirectUrl=res.locals.redirectUrl || '/listings'
    res.redirect(redirectUrl)
}

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","Logged Out Succesfully!")
        res.redirect('/listings')
    })
}


module.exports.fetchUserListings = async (req, res) => {
    try {
        const user=res.locals.currUser;
        if (!user) {
            return res.status(404).send("User not found");
        }

        // Find listings where owner matches the user's ID
        const listings = await Listing.find({ owner: user._id });

        res.render("listings/yourListings.ejs", { listings });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};


module.exports.fetchUserDetails = async (req, res) => {
    try {
        const user=res.locals.currUser;
        if (!user) {
            return res.status(404).send("User not found");
        }

        res.render("main/userDetails.ejs", { user });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};