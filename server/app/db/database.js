

/**

  General database is modularized. The following structure outlines module dependancies:


                    Server.js
                        |
                __________router.js _____________
               /        |                  \
              /       |                   \
            chatservice.js    auth.js           fileservice.js 
              \         |
               \      userUtilMethods.js
                \         |
                 \______dbUtilMethods.js
                          |
                        database.js


  As we add more functionality like the file transfering service, this structure won't be
  as unidirectional. For now, there isn't the chat service or file service

**/



const fs = require('fs'),
      DB_FILENAME = __dirname + "/database.db",
	  exists = fs.existsSync(DB_FILENAME)
      sqlite3 = require("sqlite3").verbose(),
      DB_SCHEMA_FILENAME = __dirname + "/schema.sql",
      dbSchema = fs.readFileSync(DB_SCHEMA_FILENAME,{ encoding: "utf-8" });
      console.log(dbSchema)

exports.db = new sqlite3.Database(DB_FILENAME);

/**

	Database initialization

**/


exports.db.serialize(function(){
    if(!exists){
        exports.db.exec(dbSchema,function(err){
            if(err){
                console.log("Error - Database building failed", err)
            }
            console.log("Database constructed")
        })
    }
});

exports.db.close() 





