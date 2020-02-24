import fs from "fs";
import mongoose from "mongoose";
import path from "path";
import GuestCollection from "../models/GuestCollection";

// const products = require('express').Router({
//   mergeParams: true
// });
const appDir = path.dirname(require.main.filename);

export default (req, res) => {
  console.log(req);

  let guestNum = JSON.parse(req.body.data);
  let guestNumber = guestNum;

  // make a connection
  mongoose.connect("mongodb://admin:Life%402020@ds115434.mlab.com:15434/kiosk");

  // get reference to database
  var db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));

  db.once("open", function() {
    console.log("Connection Successful!");

    const guestSchema = mongoose.Schema({
      name: String,
      mobile: String,
      dob: String,
      doa: String
    });
    delete mongoose.connection.models["guestModel"];
    let guestModel = mongoose.model(
      "guestModel",
      guestSchema,
      "GuestCollection"
    );

    guestModel
      .find({ mobile: guestNumber })
      .then(data => {
        res.status(200).json({ found: data.length });
      })
      .catch(err => {
        res.status(200).json({ found: "error" });
      });
  });
};
