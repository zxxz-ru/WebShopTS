"use strict";
exports.__esModule = true;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
typeorm_1.createConnection({
    type: "postgres",
    host: "localhost",
    port: 3306,
    username: "vmodestov",
    password: "Aex3K@eZ",
    database: "web_shop",
    entities: [
        __dirname + "build/entity/*js"
    ],
    synchronize: true,
    logging: false
}).then(function (connection) {
    console.log('Connected to database on port: 3306');
})["catch"](function (error) { return console.log(error); });
