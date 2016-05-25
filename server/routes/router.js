
module.exports = function(app, express, passport, sRouter, busboy, uuid, path, fs, io){
    // Instantiate routers for three child routes
    var authenticationRouter = express.Router()
    var clientRouter = express.Router()
    var fileServiceRouter = express.Router()
    //
    app.use('/api/login', authenticationRouter)
    app.use('/api/profile', clientRouter)
    app.use('/api/files', fileServiceRouter)
    // Passing registers down into child routes
    require('./authentication.routes.js')(app, passport)
    require('./client.routes.js')(app, sRouter)
    require('./fileService.routes.js')(app, sRouter, busboy, uuid, path, fs, io)
}


