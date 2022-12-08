const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    email:String,
    location:String,
});
const messageSchema = new mongoose.Schema({
message: String,
date:{ type: Date, required: true },
username:[userSchema],

});

module.exports = mongoose.model("message", messageSchema);

