const Booking = require('./models/booking.js');
const Listing=require('./models/listing');
const Review = require('./models/reviews.js');
const {listingSchema, reviewSchema, bookingSchema}=require('./schema.js');
module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","User Not Logged In");
        return res.redirect('/login')
    }
    next()
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next()
}

module.exports.isOwner=async (req,res,next)=>{
    const {id}=req.params;
    const listing=await Listing.findById(id);
    if(res.locals.currUser && !res.locals.currUser._id.equals(listing.owner._id)){
        req.flash("error","Unauthorized Access!")
        return res.redirect(`/listings/${id}`)
    }
    next();
}

module.exports.isAuthor=async (req,res,next)=>{
    const {id,reviewId}=req.params;
    const review=await Review.findById(reviewId);
    if(res.locals.currUser && !res.locals.currUser._id.equals(review.author._id)){
        req.flash("error","Unauthorized Access!")
        return res.redirect(`/listings/${id}`)
    }
    next();
}

module.exports.ValidateListing=(req,res,next)=>{
    const {err}=listingSchema.validate(req.body);
    if(err){
        throw new ExpressError("400",err);
    }
    else{
        next()
    }
}

module.exports.ValidateReview=(req,res,next)=>{
    const {err}=reviewSchema.validate(req.body);
    if(err){
        throw new ExpressError("400",err);
    }
    else{
        next()
    }
}

module.exports.ValidateBooking=(req,res,next)=>{
    const {err}=bookingSchema.validate(req.body);
    if(err){
        throw new ExpressError("400",err);
    }
    else{
        next()
    }
    
}

module.exports.isBookingOwner=async (req,res,next)=>{
    const {id}=req.params;
    const booking=await Booking.findById(id);
    if(res.locals.currUser && !res.locals.currUser._id.equals(booking.user._id)){
        req.flash("error","Unauthorized Access!")
        return res.redirect(`/listings`)
    }
    next();
}