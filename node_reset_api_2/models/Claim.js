const mongoose = require("mongoose");

const ClaimSchema = new mongoose.Schema({
    fullnameOfPolicyHolder: {
        type: String,
        require: true
    },
    emailOfPolicyHolder: {
        type: String,
        require: true,
    },
    Prooflink: {
        type: String,
        require: true,
    },
    policyType: {
        type: String,
        require: true
    },
    claimISProved: {
        type: Number,
        default: 0,
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("Claim", ClaimSchema);