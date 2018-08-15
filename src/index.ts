import "reflect-metadata";
import {createConnection} from "typeorm";
import { User_Profile } from "./initdb/user_profile";

class Init {
async init() {
  const conn = await createConnection();
  // const user_profile = new User_Profile(conn);
  // await user_profile.saveUserProfile();
  }
}

const init = new Init();
init.init();