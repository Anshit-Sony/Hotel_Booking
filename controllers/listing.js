const Listing = require('../models/listing')
const ExpressError = require('../utils/ExpressError.js')
module.exports.index = async (req, res) => {
    const listingData = await Listing.find({}).populate('owner');
    res.render('listings/index.ejs', { listingData });
}

module.exports.renderNewListingForm = (req, res) => {
    res.render('listings/new.ejs');
}
module.exports.addNewListing = async (req, res) => {
    const url = req.file.path;
    const filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    await newListing.save()
    req.flash("success", "New Listing Added")
    res.redirect('/listings')
}

module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: 'reviews',
            populate: {
                path: 'author'
            }
        })
        .populate('owner');
    if (!listing) {
        req.flash("error", "Listing Doesn't Exist!")
        res.redirect('/listings')
    }
    res.render('listings/show.ejs', { listing })
}


module.exports.renderEditListingForm = async (req, res) => {
    const { id } = req.params
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing Doesn't Exist!")
        res.redirect('/listings')
    }
    res.render('listings/edit.ejs', { listing })
}

module.exports.editListing = async (req, res) => {
    if (!req.body.listing) {
        throw new ExpressError(400, "Send valid Data");
    }

    const { id } = req.params;
    let url = req.file ? req.file.path : null;
    let filename = req.file ? req.file.filename : null;
    const listing = await Listing.findByIdAndUpdate(id, req.body.listing, { new: true });
    if (!listing) {
        throw new ExpressError(404, "Listing not found.");
    }
    if (url && filename) {
        listing.image = { url, filename };
    }
    await listing.save();
    req.flash("success", "Updated Successfully!");
    res.redirect(`/listings/${id}`);
};


module.exports.destroyListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Deleted Successfully!")
    res.redirect('/listings')
}

module.exports.searchListing = async (req, res) => {
    try {
        const searchQuery = req.query.query; 

        let filter = {};
        if (searchQuery) {
            const regex = new RegExp(searchQuery, "i");
            filter = {
                $or: [
                    { title: regex },
                    { description: regex },
                    { location: regex },
                    { country: regex }
                ]
            };
        }

        const listings = await Listing.find(filter).populate('owner');

        res.render("listings/index.ejs", { listingData:listings, search: searchQuery });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};
