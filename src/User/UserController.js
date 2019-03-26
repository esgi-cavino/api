var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

var User = require("./User");

// Creates a new User
router.post('/', (req, res) => {

    User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    },
    function (err, user) {
        if(err){
            return(res.status(500).send("There was a problem adding the User to the database."));
        }else{
            res.status(200).send(user);
        }
    });
});

// Returns all the Users in the database
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if(err){
            return(res.status(500).send("There was a problem finding the users."));
        }else{
            res.status(200).send(users);
        }
    });
});

// Gets a single User from the database
router.get("/:id", (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(err){
            return(res.status(500).send("There was a problem finding the user."));
        }
        if(!user){
            return(res.status(404).send("No user found."));
        }else{
            res.status(200).send(user);
        }
    });
});

// Deletes a User from the database
router.delete("/:id", (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if(err){
            return(res.status(500).send("There was a problem deleting the user."))
        }
        if(!user){
            return(res.status(404).send("User not found."));
        }else{
            res.status(200).send("User " + user.name + " was deleted.");
        }
    });
});

// Updates a single User in the database
router.post("/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => {
        if(err){
            return(res.status(500).send("There was a problem updating the user."));
        }
        if(!user){
            return(res.status(404).send("User not found."));
        }else{
            res.status(200).send(user);
        }
    });
});

module.exports = router;