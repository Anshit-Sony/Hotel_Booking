const Joi = require('joi');

module.exports.listingSchema=Joi.object({
    listing : Joi.object({
        title : Joi.string().required(),
        decription: Joi.string().required(),
        price: Joi.number().required().min(0),
        country: Joi.string().required(),
        location : Joi.string().required(),
        image: Joi.object()
    }).required()
})

module.exports.reviewSchema=Joi.object({
    review: Joi.object({
        comment:Joi.string().required(),
        rating:Joi.number().required().min(1).max(5)
    }).required()
})

module.exports.bookingSchema=Joi.object({
    booking: Joi.object({
        checkIn: Joi.date().required(),
        checkOut: Joi.date().required().greater(Joi.ref('booking.checkIn'))
    }).required()
})