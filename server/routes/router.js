
module.exports = function(app, express, io){
    // Static routes
    app.use(express.static(__dirname + '/../client/'));

    // Module routes
    require('./authentication.routes.js')(app, express)
    require('./client.routes.js')(app, express)
    require('./fileService.routes.js')(app, express, io)
}


