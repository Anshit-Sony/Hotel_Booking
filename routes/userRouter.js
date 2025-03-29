const express=require('express');
const wrapAsync=require('../utils/wrapAsync.js')
const User=require('../models/user.js')
const passport=require('passport');
const { saveRedirectUrl, isLoggedIn, isBookingOwner } = require('../middlewares.js');
const UserController=require('../controllers/user.js')
const BookingController=require('../controllers/booking.js')
const ListingController=require('../controllers/listing.js')
const router=express.Router()

router.route('/signup')
.get(UserController.renderSignup)
.post(wrapAsync(UserController.signup))

router.route('/login')
.get(UserController.renderLogin)
.post(saveRedirectUrl,passport.authenticate('local',{failureRedirect:"/login", failureFlash:true}),
UserController.login
)

router.route('/logout')
.get(UserController.logout)

router.route('/yourprofile')
.get(isLoggedIn,UserController.fetchUserDetails)

router.route('/yourlistings')
.get(isLoggedIn,UserController.fetchUserListings);

router.route('/yourbookings')
.get(isLoggedIn,BookingController.getUserBookings)

router.route('/bookings/:id')
.delete(isLoggedIn,isBookingOwner,BookingController.deleteBooking)

router.route('/search')
.get(wrapAsync(ListingController.searchListing))
module.exports=router