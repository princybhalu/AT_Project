const routes = require("express").Router();

routes.get("/" , (req , res)=> res.send("welcome to user page of api") );



module.exports = routes ;