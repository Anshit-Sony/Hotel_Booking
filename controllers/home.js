const Listing=require('../models/listing')

module.exports.renderHome=(req,res)=>{
    res.render('main/home.ejs')
}