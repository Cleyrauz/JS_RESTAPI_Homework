const express = require('express');
const router = new express.Router();

router.use('/beaches', require('./beaches'));

router.get('/', function(req, res){
  res.json({data: "Welcome!"});
});

router.get('/about', function(req, res){
  res.json({data: "Some text about us"});
});

module.exports = router;
