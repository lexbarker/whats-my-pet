var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true}));
router.use(bodyParser.json());
var Pet = require('./Pets');
//POSTS A NEW USER TO THE DATABASE
router.post('/', function (req, res) {
  Pet.create({
    name : req.body.name,
    animal : req.body.animal,
    breed: req.body.breed
  },
function (err, pet) {
  if (err) return res.status(500).send("There was a problem adding the information to the database.");
  res.status(200).send(pet);
});
});
// RETURNS ALL THE USERS IN THE database
router.get('/', function (req, res) {
  Pet.find({}, function (err, pets) {
    if (err) return res.status(500).send("There was a problem finding the pets.");
    res.status(200).send(pets);
  });
});
// GETS A SINGLE USER FROM THE DATA bodyParser
router.get('/:id', function(req, res) {
  Pet.findById(req.params.id, function(err, pet) {
    if (err) return res.status(500).send("There was a problem finding the pet.");
    if (!pet) return res.status(404).send('No Pet was found.');
    res.status(200). send(pet);
  });
});
// DELETE A USER FROM THE database
router.delete('/:id', function(req, res) {
  Pet.findByIdAndRemove(req.params.id, function (err, pet) {
    if (err) return res.status(500).send('There was a problem deleteing the pet.');
    res.status(200).send('Pet '+ pet.name +' was deleted.');
  });
});
// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req,res) {
  Pet.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, pet) {
        if (err) return res.status(500).send("There was a problem updating the pet.");
        res.status(200).send(pet);
      });
});
module.exports = router;
