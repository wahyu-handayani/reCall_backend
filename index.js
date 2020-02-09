const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors=require('cors')
app.options('*', cors())
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

  app.options('*', (req, res) => {
      // allowed XHR methods  
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
  });
});

const data=require('./src/routes/user');
// parse application/json
app.use(bodyParser.json());
app.use('/',data);


app.listen(4000, () => {
    console.log('server is running..')
})