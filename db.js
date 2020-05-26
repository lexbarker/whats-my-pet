console.log('db script');
var mongoose = require('mongoose');

var passw = process.env.DB_CRED
//console.log(passw)
//const uri = 'mongodb://localhost:27017/';
var uri = `mongodb+srv://dbUser:${passw}@cluster0-wntrx.mongodb.net/test?retryWrites=true&w=majority`
//console.log(uri)
const options = {
  useNewUrlParser: true,
  dbName: 'pets'
  };
mongoose.connect(uri, options);

