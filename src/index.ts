import * as express  from 'express';
import { UserRouter } from './controller/user/userRouter';

class Index {
run() {
  const app:express.Application = express();
  const userRouter = new UserRouter();
  const usr_router = userRouter.getRouter();
  app.get('/', (req: express.Request, res: express.Response) => {
    res.send(`<p>Request came from root.</p>`);   
  });

  app.get('/test', (req: express.Request, res: express.Response) => {
    res.send(`<p>Request came from test. login: ${req.query.login} & password: ${req.query.pass}</p>`);   
  });
  app.post('/', (req: express.Request,res:express.Response) => {
    console.log(req.route);
    res.end();
  });
  app.use("/usr", usr_router); 
  app.listen(3000);
    console.log("app is up on port 3000");
  }
}

const init = new Index();
init.run();