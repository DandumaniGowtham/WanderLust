const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const URL = "mongodb://127.0.0.1:27017/wander";
main()
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch(()=>{
        console.log(err);
    })
async function main(){
    await mongoose.connect(URL);
}

const initDB =  async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "68f773a69cf79b26dd9f35e1"}));
    await Listing.insertMany(initData.data);
    console.log("Data initialization was Successful");
}
initDB();