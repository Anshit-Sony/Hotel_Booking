const express=require('express');
const wrapAsync=require('../utils/wrapAsync.js')
const {ValidateReview, isLoggedIn, isAuthor}=require('../middlewares.js')
const router=express.Router({mergeParams:true})
const ReviewController=require('../controllers/review.js')

router.route('/')
.post(isLoggedIn,ValidateReview,wrapAsync(ReviewController.addReview))

router.route('/:reviewId')
.delete(isLoggedIn,isAuthor,wrapAsync(ReviewController.destroyReview))


module.exports=router