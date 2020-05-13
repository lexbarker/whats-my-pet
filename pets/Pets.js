var mongoose = require('mongoose');
var PetSchema = new mongoose.Schema({
  name: String,
  animal: String,
  breed: String
}, {
  collection: "pets"
});
mongoose.model('Pet', PetSchema);
module.exports = mongoose.model('Pet');
