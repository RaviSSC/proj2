const mongoose = require("mongoose");
// const { stringify } = require("querystring");

const dataStructure = new mongoose.Schema({
    name:String,
    message:String,
})


const structureExported = mongoose.model("structureExported", dataStructure);

module.exports= structureExported;

