var express = require('express');
var router = express.Router();
var Project = require('../models/project.js');

//get all projects
router.get('/projects', function(req, res, next) {
  Project.find(function(err, projects){
    res.json(projects);
  });
});

//get one project
router.get('/project/:id', function(req, res, next) {
  Project.findById(req.params.id, function(err, project){
    res.json(project);
  });
});

//post-add one project
router.post('/projects', function(req, res, next) {
  new Project(req.body)
  .save(function(err, project){
    res.json(project);
  });
});

//put-update one project
router.put('/project/:id', function(req, res, next) {
  var query = {'_id':req.params.id};
  var update = req.body;
  var options = {new: true};
  Project.findOneAndUpdate(query, update, options, function(err, project){
    res.json(project);
  });
});

//delete-delete one project
router.delete('/project/:id', function(req, res, next){
  var query = {'_id': req.params.id};
  Project.findOneAndRemove(query, function(error, project){
    res.json(project);
  });
});

module.exports = router;
