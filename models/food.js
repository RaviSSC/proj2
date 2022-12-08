const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wineSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    year:Number,
    location:String,
});
const foodSchema = new mongoose.Schema({
dinner: String,
sides: String,
username:[userSchema],

});

module.exports = mongoose.model("food", foodSchema);

