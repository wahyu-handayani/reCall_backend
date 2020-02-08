const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json());
const conn = require('./src/config/config');

const dataEngineer=require('./src/routes/user');
// parse application/json
app.use(bodyParser.json());
app.use('/',dataEngineer);


app.listen(4000, () => {
    console.log('server is running..')
})