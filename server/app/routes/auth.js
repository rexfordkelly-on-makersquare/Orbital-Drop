const fs = require('fs');
const path = require('path');

const auth = require('auth.js').passport

module.exports = function registerRoutes(App, x, Express){

  /* attach authentication middlewares */
  
    x.use(auth.initialize());
    x.use(auth.session());

  /* Authentication Routes */

    // Login Page
    x.get('/login', function(req, res){
      res.render('login');
    });

    // Github Login
    x.get('/login/github', auth.authenticate('github'));

    // Handle GitHub Login Results
    x.get('/login/github/return', 
          auth.authenticate('github', { failureRedirect: '/login' }),
          function(req, res) { res.redirect('/profile'); });
}
