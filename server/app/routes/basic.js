const fs = require('fs');
const path = require('path');

module.exports = function registerRoutes(App, x, express){

    x.get('/', function(req, res){
        res.redirect('/index.html');
    });
}



