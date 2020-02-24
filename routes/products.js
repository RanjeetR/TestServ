
import fs from 'fs';
import mongoose from 'mongoose';
import path from 'path';
const products = require('express').Router({
  mergeParams: true
});
const appDir = path.dirname(require.main.filename);

export default (req, res) => {
  const dburl = 'mongodb://RanjeetR:Ranjeet_1989@ds125680.mlab.com:25680/ranjeetdb';
  mongoose.connect(dburl, (err, db) => {
      if (err) throw err;
      db.collection("productdetails").findOne({}, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
      });
  });
};