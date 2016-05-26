var path = require('path')
module.exports = function(app, express, socketedServer){
    // Static routes
    app.use(express.static(__dirname + '/../client/'));
    app.get('/', function(request, response){
        response.sendFile(path.join(__dirname, "/../controllers/test/test.html"));
    })
    // Module routes
    require('./authentication.routes.js')(app, express)
    require('./client.routes.js')(app, express)
    require('./fileService.routes.js')(app, express, socketedServer)
}


