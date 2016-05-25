
module.exports = function(app, express, passport, sRouter, busboy, uuid, path, fs){
    // Instantiate routers for three child routes
    var fileServiceRouter = express.Router()
    var authenticationRouter = express.Router()
    var clientRouter = express.Router()
    //
    app.use('/api/login', authenticationRouter)
    app.use('/api/profile', clientRouter)
    // Passing registers down into child routes
    require('./fileService.routes.js')(fileServiceRouter, sRouter, busboy, uuid, path, fs)
    require('./authentication.routes.js')(app, passport)
    require('./client.routes.js')(app, sRouter)
}


