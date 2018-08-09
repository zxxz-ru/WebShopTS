import "reflect-metadata";
import {createConnection} from "typeorm";

createConnection(
  {
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
  }
).then(connection => {
  console.log('Connected to database on port: 3306');
   }).catch(error => console.log(error));
