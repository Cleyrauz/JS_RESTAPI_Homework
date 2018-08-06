const express = require('express');
const beachRouter = new express.Router();

let beaches = [
  {name: "Fidden Bay,"},
  {name: "Assynt"},
  {name: "Morar"},
  {name: "Sanna Sands"}
];


//index
beachRouter.get('/:id', function(req, res){
  let index = req.params.id;
  res.json(beaches[index]);
});

//show
beachRouter.get('/', function(req, res){
  res.json(beaches);
});

//create
beachRouter.post('/', function(req, res){
  beaches.push(req.body.beach);
  res.json(beaches);
});

//update
beachRouter.put('/:id', function(req, res){
  let index = req.params.id;
  beaches[index] = req.body.beach;
  res.json(beaches);
});

//delete
beachRouter.delete('/:id', function(req, res){
  let index = req.params.id;
  beaches.splice(index, 1);
  res.json(beaches);
});

module.exports = beachRouter;
