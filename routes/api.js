'use strict';

var express = require('express');
var router = express.Router();

var request = require('request');
// api.js


router.post('/ajax', (req, res) => {

  // req.body.url
  // req.body.method

  request(req.body.url, function(err, response, body) {
    if(err) {
      return res.status(400).send(err);
    }
    console.log('body:', body);
    res.send(body);
  })


});

module.exports = router;
