const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shashanksgh3:%402005SINGHjvm@cluster0.eoakwss.mongodb.net/car");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    num1: {
        type: String, // Change from Number to String
        required: true,
        minLength: 10,
        maxLength: 10 // Set the length constraint for phone number as a string
    },
    time: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};
