var path = require('path')
module.exports = function(app, express, socketedServer){
    // Module routes
    require('./authentication.routes.js')(app, express)
    require('./fileService.routes.js')(app, express, socketedServer)
    require('./client.routes.js')(app, express)
    
}


