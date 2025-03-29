const express = require('express');
const wrapAsync = require('../utils/wrapAsync.js')
const { isLoggedIn, isOwner, ValidateListing, ValidateBooking } = require('../middlewares.js');
const ListingController=require('../controllers/listing.js')
const BookingController=require('../controllers/booking.js')
const router = express.Router()
const multer  = require('multer')
const {storage}=require('../cloudConfig.js')
const upload = multer({ storage })

router.route('/')
.get( wrapAsync(ListingController.index))
.post(isLoggedIn,upload.single('listing[image]'),ValidateListing,wrapAsync(ListingController.addNewListing))


router.route('/new')
.get(isLoggedIn,ListingController.renderNewListingForm)

router.route('/:id')
.get(wrapAsync(ListingController.showListing))
.put(isOwner,upload.single('listing[image]'),ValidateListing ,wrapAsync(ListingController.editListing))
.delete(isLoggedIn, isOwner, wrapAsync(ListingController.destroyListing))

router.route('/:id/edit')
.get(isLoggedIn, isOwner, wrapAsync(ListingController.renderEditListingForm))

router.route('/:id/book')
.get(isLoggedIn,BookingController.renderBookingForm)
.post(isLoggedIn,ValidateBooking,wrapAsync(BookingController.createBooking))


module.exports = router;