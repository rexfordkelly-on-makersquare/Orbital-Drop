const 	fs = require('fs');
const path = require('path');

const Express = require("express");

	/**
		Our AirDrop Server Application
	*/

	// Our Airdrop Application
	var App = { paths: { 
						APP_ROOT: path.join( __dirname, '/app'), // Public Files
						DOC_ROOT: path.join( __dirname, '../http_public') // Server side Application Files
					   }
			  };

	// Express Server Application
	var x = Express();


		// Apply Common Middleware
		x.use(require('cookie-parser')());
		x.use(require('body-parser').urlencoded({ extended: true }));
		x.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));


		// Register Application Routes
		require( App.paths.APP_ROOT + '/routes.js')(App, x, Express );
		
		// Start Server
		x.listen(3000, function(){
			console.log("All modules loaded, server listening on 3000")
		});