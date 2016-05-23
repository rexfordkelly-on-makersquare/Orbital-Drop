const fs = require('fs');
const path = require('path');

module.exports = function registerRoutes(App, x, Express){

    // Mount Public Static Files 
    x.use( Express.static( App.paths.DOC_ROOT ));

    require( __dirname + '/routes/basic.js')(App, x, Express);
    // require('routes/api.js').registerRoutes(x);
    // require('routes/auth.js').registerRoutes(x);

}
