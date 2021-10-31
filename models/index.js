'use strict';

// ////// 6 >> open this link https://sequelize.org/ and go to the v6 Documentation
const { Sequelize, DataTypes } = require('sequelize');
//npm i sequelize
//npm i pg --save >> The --save makes the dependency available in our package.json file.

// /////// 7
// connects to our database depending on the URI set as an environment variable, 
const POSTGRES_URI =  process.env.DATABASE_URL ||"postgresql://razanatallah:12345@localhost:5432/class3demo";
// for MAC:  "postgres://localhost:5432/rawanalnujoom"
// make sure to run the pg server >> sudo service postgres start
// // At terminal:
// psql
// CREATE DATABASE class3demo; 


// ///////// 8
// let sequelizeOptions = {}; // will keep it empty for now: for passing ssl,https
// what is heroku ssl >> https://devcenter.heroku.com/articles/ssl
let sequelizeOptions = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
}
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

// ////////// 9 now let's define our schema
// our schema definitions
const people = require('./people.model.js');
// go to models/people.model.js for /// 10


// /////// 11
module.exports = {
  db: sequelize, // for connection and will use it in index.js
  People: people(sequelize, DataTypes), // for building the table and will use it in routes/people.js
};

// now we need to run this file to start connecting to our DB server
// go to index.js for /// 12
