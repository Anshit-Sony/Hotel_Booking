const mongoose=require('mongoose');
const initData=require('./data.js')
const Listing=require('../models/listing.js')

main().then(()=>{
    console.log("Monogo DB connected")
}
)
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB= async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:'67c7f3f52ec47c988d738b34'}));
    await Listing.insertMany(initData.data);
}

initDB();
