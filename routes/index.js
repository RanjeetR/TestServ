const routes = require('express').Router();
import products from './products';
import users from './userdetails';
import  validateData  from "./validateData";
import tokenGeneration from './tokenGeneration';

// routes.use('/products', products);
routes.use('/save', users);
routes.use('/validate', validateData);
routes.use('/token', tokenGeneration);

routes.use('/', (req, res) => {
  res.status(200).json({ message: 'Connected!  CICD working  ....' });
});

routes.use('/test', (req, res) => {
  console.log('xxx', req);
  res.status(200).json({ message: 'Testing  ....' });
});

export default routes;
