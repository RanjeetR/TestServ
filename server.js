import express from 'express';
import fs from 'fs';
import cors from 'cors';
import routes from './routes';
import bodyParser from 'body-parser'
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());
// add your cors options here
// var corsOptions = {
//     origin: 'http://localhost:8080',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

app.use('/', routes);
const server = app.listen(process.env.PORT || 8086 , () => {
    console.log(`server started at ${server.address().port}`);
});