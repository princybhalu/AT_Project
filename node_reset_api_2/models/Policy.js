const mongoose = require("mongoose");

const PolicySchema = new mongoose.Schema({
    fullnameOfPolicyHolder: {
        type: String,
        require: true,
        min: 3,
        max:30 ,
    },
    emailOfPolicyHolder: {
        type: String,
        require: true,
        max: 50,
        unique: true,
    },
    ageOfPolicyHolder: {
        type: Number,
        require: true
    },
    incomOfPolicyHolder: {
        type: Number,
        require: true
    },
    policyType: {
        type: String,
        require: true
    },
    policyAmount: {
        type: String ,
        require: true ,
    },
    timePeriodOfRenewPolicy:{
        type: String,
        default: "Month",
    },
    policyISProved: {
        type: Number,
        default: 0 ,
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("Policy", PolicySchema);