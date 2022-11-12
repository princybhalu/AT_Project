const routes = require("express").Router();
const Policy = require("../models/Policy");
const User = require("../models/User");


// Add Policy
routes.post("/add", async (req, res) => {

    try {
        // create user 
        const add = await new Policy({
            fullnameOfPolicyHolder: req.body.fullnameOfPolicyHolder,
            emailOfPolicyHolder: req.body.emailOfPolicyHolder,
            ageOfPolicyHolder: req.body.ageOfPolicyHolder,
            incomOfPolicyHolder: req.body.incomOfPolicyHolder,
            policyType: req.body.policyType,
            policyAmount: req.body.policyAmount,
            timePeriodOfRenewPolicy: req.body.timePeriodOfRenewPolicy,
            policyISProved: req.body.policyISProved,
        });


        // Save user and respons 
        const policy = await add.save();
        res.status(200).json(policy);
    } catch (err) {
        res.status(500).json(err);
    }
}
);


//get user's all policies
routes.get("/getAllPolicy/:email", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        const policies = await Policy.find({ emailOfPolicyHolder: user.email });
        // const policies = await Policy.find();
        res.status(200).json(policies);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get user's all policies
routes.get("/getAllPolicyForAdmin", async (req, res) => {
    try {
        const policies = await Policy.find();
        res.status(200).json(policies);
    } catch (err) {
        res.status(500).json(err);
    }
});

routes.put("/setApporve/:id", async (req, res) => {
    try {
        const post = await Policy.findById(req.params.id);
            await post.updateOne({ $set: req.body });
            res.status(200).json("the post has been updated");
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = routes;