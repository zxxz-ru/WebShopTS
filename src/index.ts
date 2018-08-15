import "reflect-metadata";
import {createConnection} from "typeorm";
import { PhotoInit } from "./initdb/photo";
import { ProductInit } from "./initdb/product";
import { ManufacturerInit } from "./initdb/manufacturer";

class Init {
async init() {
  const conn = await createConnection();
  const ph = new PhotoInit(conn);
  const pr = new ProductInit(conn);
  const m = new ManufacturerInit(conn);
  await m.save();
  await pr.save();
  await ph.save();

  }
}

// const init = new Init();
// init.init();