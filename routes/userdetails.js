
import fs from 'fs';
import mongoose from 'mongoose';
import path from 'path';
const MongoClient = require('mongodb').MongoClient;
const products = require('express').Router({
  mergeParams: true
});
const appDir = path.dirname(require.main.filename);

export default (req, res) => {
  console.log(req)
  
  let guestData = (JSON.parse(req.body.data));


  // make a connection
mongoose.connect('mongodb://admin:Life%402020@ds115434.mlab.com:15434/kiosk');
 
// get reference to database
var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");


  let guestSchema = mongoose.Schema({
    name: String,
    mobile: Number,
    dob: String,
    doa: String
  });

  delete mongoose.connection.models['guestModel'];

  let guestModel = mongoose.model('guestModel' , guestSchema, "GuestCollection");


  guestModel.collection.insert(guestData, function (err, docs) {
    if (err){ 
        return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection", docs);
      res.status(200).json({ count: docs.insertedCount });
    }
  });
  
  

})





};