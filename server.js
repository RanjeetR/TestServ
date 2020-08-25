import express from "express";
import fs from "fs";
import cors from "cors";
import routes from "./routes";
import bodyParser from "body-parser";
import { connectToDb } from "./utils/connect";
//const MongoClient = require("mongodb").MongoClient;
const app = express();

// parse application/json
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(cors());

connectToDb();
// mongoose.connect(
//   // "mongodb://admin:Life%402020@ds115434.mlab.com:19966/simpledbfortest",
//   "mongodb://RanjeetAdmin:ad%40Pass77@ds019966.mlab.com:19966/simpledbfortest",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// );

// add your cors options here
// var corsOptions = {
//     origin: 'http://localhost:8080',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

app.use("/", routes);
const server = app.listen(process.env.PORT || 9096, () => {
  console.log(`server started at ${server.address().port}`);
});
