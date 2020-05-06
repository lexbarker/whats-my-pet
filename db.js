console.log('db script');
var mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/';
const options = {
  useNewUrlParser: true,
  dbName: 'pets'
  };
mongoose.connect(uri, options);
