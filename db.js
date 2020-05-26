console.log('db script');
var mongoose = require('mongoose');

const passw = process.env.DB_CRED
const uri = 'mongodb://localhost:27017/';
const uri = 'mongodb+srv://dbUser:${passw}@cluster0-wntrx.mongodb.net/test?retryWrites=true&w=majority'
const options = {
  useNewUrlParser: true,
  dbName: 'pets'
  };
mongoose.connect(uri, options);
