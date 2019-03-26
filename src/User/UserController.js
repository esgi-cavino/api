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

module.exports = router;