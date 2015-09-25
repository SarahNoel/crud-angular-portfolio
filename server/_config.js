var config = {};

config.mongoURI = {
  development: 'mongodb://localhost/crud-portfolio',
  test: 'mongodb://localhost/portfolio-test',
  production: 'mongodb://heroku_lgnl9pqw:ts8u2b1qsralbqrie0u1bphbjd@ds051913.mongolab.com:51913/heroku_lgnl9pqw'
};

module.exports = config;
