'use strict';

// //////// 1
const express = require('express');
// I wanna take all the routing functionalities from Express(so I can add methods easily) and will use this router to create my routes and at the end will export it and require it in the server.js
const router = express.Router();

// ///////// 13
const {People} = require('../models/index');
// console.log(People)

// /////// 2
// add routes
router.get('/people', getPeople);
router.get('/people/:id', getOnePerson);
router.post('/people', createPerson); //201
router.put('/people/:id', updatePerson);
router.delete('/people/:id', deletePerson);

// //////// 3 >> do all the functions but without implementation
async function getPeople(req, res) {
    // ///////// 14
    // get me all data from people
    let people = await People.findAll();
    res.status(200).json(people);
}


async function getOnePerson(req, res) {
    // /////// 15
    const id = parseInt(req.params.id); // req.params is an object 
    let person = await People.findOne({ where: {id: id} });
    res.status(200).json(person);
}

async function createPerson(req, res) {
    // /////// 16
    let newPerson = req.body;
    let person = await People.create(newPerson);
    res.status(200).json(person);
}
// try it out on postman
// make sure it's POST & 3nd body tab >>raw>>JSON not TEXT
// so you can add the json object to add a person
// show them the results on DBeaver as well

async function updatePerson(req, res) {
    // /////// 17
    let id = parseInt(req.params.id);
    let obj = req.body;
    // find the person
    let found = await People.findOne({ where: {id: id} });
    // update the person + save
    let updatedPerson = await found.update(obj);
    res.status(200).json(updatedPerson);
}

async function deletePerson(req,res) {
    // /////// 18
    let id = parseInt(req.params.id);
    let deletedPerson = await People.destroy({where: {id: id}});
    res.status(204).json(deletedPerson);
    // for Heroku Deployment >> check 00-lec again
}

module.exports = router;
// now we want to hook it up with our server
// go to server.js for /// 4