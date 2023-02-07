import express from 'express';
// const express = require('express');
import bodyParser from 'body-parser';
//const bodyParser = require('body-parser')
import * as dotenv from "dotenv" // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import APIroute from './route/APIroute'
import route from './route/route'
// import connectDB from './config/connectDB';

dotenv.config()

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

APIroute.initAPIRoute(app);
route.initOrderRoute(app);
//connectDB.connectDB();

app.listen(process.env.PORT,() => {
     console.log(`app is listening to port 3000`);
})