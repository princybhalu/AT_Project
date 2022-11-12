const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        require: true,
        min: 3,
        max:30 ,
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        min: 6,
    },
    typeOfUser: {
        type: Number,
        default: 1 // 1 for customer // 2 emplooy 
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);