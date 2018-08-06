const express = require('express');
const mountainRouter = new express.Router();

let mountains = ["Ben Nevis", "Stac Pollaidh", "Suilven", "Ben Lomonds"]

//show
mountainRouter.get('/', function(req, res){
  res.json(mountains);
});

//index
mountainRouter.get('/:id', function(req, res){
  let index = req.params.id;
  res.json(mountains[index]);
});

//create
mountainRouter.post('/', function(req, res){
  mountains.push(req.body.mountain);
  res.json(mountains);
});

//update
mountainRouter.put('/:id', function(req, res){
  let index = req.params.id;
  mountains[index] = req.body.mountain;
  res.json(mountains);
});

//delete
mountainRouter.delete('/:id', function(req, res){
  let index = req.params.id;
  mountains.splice(index, 1);
  res.json(mountains);
});

module.exports = mountainRouter;
