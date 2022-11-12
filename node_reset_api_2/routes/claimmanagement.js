const routes = require("express").Router();
const Claim = require("../models/Claim");
const User = require("../models/User");

// Add Claim 
routes.post("/add", async (req, res) => {
    try {
        const add = await new Claim(req.body);
        const claims = await add.save();
        res.status(200).json(claims);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get user's all policies
routes.get("/getAllClaimRequest", async (req, res) => {
    try {
        const claimes = await Claim.find();
        res.status(200).json(claimes);
    } catch (err) {
        res.status(500).json(err);
    }
});

routes.put("/setApporve/:id", async (req, res) => {
    try {
        const post = await Claim.findById(req.params.id);
            await post.updateOne({ $set: req.body });
            res.status(200).json("the post has been updated");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = routes;