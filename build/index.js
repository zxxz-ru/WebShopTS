"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
typeorm_1.createConnection().then(connection => {
    console.log('Connected to database on port: 5432');
}).catch(error => console.log(error));
//# sourceMappingURL=index.js.map