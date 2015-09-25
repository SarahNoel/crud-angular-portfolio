var mongoose = require('mongoose');
var Project = require('./server/models/project.js');

var projectSeed = [
  {
  'name': 'Do I Have Everything?',
  'description': 'Packing app based on weather, location, and length of trip',
  'tags': ['JS, HTML, CSS, APIs'],
  'group': false,
  'group_members': 'N/A',
  'url': 'do-i-have-everything.herokuapp.com/'
  },
  {
  'name': 'Reddit Places Clone',
  'description': 'Using Angular to clone and then individualize a Reddit page',
  'tags': ['Angular'],
  'group': false,
  'group_members': 'N/A',
  'url': 'github.com/SarahNoel/reddit-clone'
  },
  {
  'name': 'Translator App',
  'description': 'Working with a group and an API to create a translation app with quizzes',
  'tags': ['Node.js, Express.js, MongoDB, Mongoose, jQuery, Javascript, HTML, CSS, Bing Translator API.'],
  'group': true,
  'group_members': 'Zoe Adelman, Lucy Cifferello, Kiersten Hill',
  'url': 'github.com/SarahNoel/hola-mundo-translator'
  },
  {
  'name': 'Node Github Contest',
  'description': 'A head to head voting app of GitHub repos with three rounds to find a winner',
  'tags': ['Node.js, Express.js, jQuery, Javascript, HTML, CSS'],
  'group': false,
  'group_members': 'N/A',
  'url': 'github.com/SarahNoel/node-github-contest'
  }

];

function databaseSeed() {
  Project.find({}, function(err, documents){
    if(!err && documents.length===0) {
      for (var i = 0; i < projectSeed.length; i++) {
        var newProject = new Project(projectSeed[i]);
        newProject.save(function(err, success){
          if(!err) {
            console.log('database seeded object!');
          }
        });
      }
    }
  });
}

module.exports = databaseSeed;

