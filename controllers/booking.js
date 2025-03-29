const Booking = require('../models/booking');
const Listing = require('../models/listing');
const User = require('../models/user');
const ExpressError = require('../utils/ExpressError.js');

module.exports.renderBookingForm = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect('/listings');
    }

    res.render('bookings/booking.ejs', { listing });
};
module.exports.createBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const { checkIn, checkOut } = req.body;

        const listing = await Listing.findById(id);
        if (!listing) {
            req.flash('error', 'Listing not found!');
            return res.redirect('/listings');
        }

        const booking = new Booking({
            listing: listing._id,
            user: req.user._id,
            checkIn,
            checkOut
        });

        await booking.save();

        const user = await User.findById(req.user._id);
        user.bookings.push(booking._id);
        await user.save();

        req.flash('success', 'Booking successful!');
        res.redirect(`/listings/${id}`);
    } catch (error) {
        throw new ExpressError(500, 'Something went wrong while booking.');
    }
};

module.exports.getUserBookings = async (req, res) => {
    try {
        const user =await res.locals.currUser.populate({
            path: 'bookings',
            populate: { path: 'listing' }
        });

        if (!user) {
            req.flash('error', 'User not found!');
            return res.redirect('/listings');
        }

        res.render('bookings/showBookings.ejs', { bookings: user.bookings });
    } catch (error) {
        throw new ExpressError(500, 'Could not retrieve bookings.');
    }
};


module.exports.deleteBooking=async (req, res) => {
    try {
        const { id } = req.params;

        // Find the booking to delete
        const booking = await Booking.findById(id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        // Remove the booking from the user's bookings array
        await User.findByIdAndUpdate(booking.user, { $pull: { bookings: id } });

        // Delete the booking from the database
        await Booking.findByIdAndDelete(id);

        req.flash("success", "Booking deleted successfully");
        res.redirect("/yourbookings")
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}