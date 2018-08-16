import * as express  from 'express';
import * as bodyParser from 'body-parser';

export class UserRouter  {

    private router: express.Router;
constructor() {
    this.router = express.Router();
    const urlParser = bodyParser.urlencoded({extended: false});
    const jsonParser = bodyParser.json();
    this.router.get('/login', (req, res) => {
res.send(`<p>Success!</p>`);

    } );
    this.router.get('', (req, res) => {
        res.send(`<p>Request came from usr root.</p>`);
    } );
    this.router.put('', () => {} );
    this.router.put('', () => {} );
    this.router.post('/login', urlParser, jsonParser, function(req:express.Request, res: express.Response) {
        console.log(req.body);
        const login = req.body.login;
        const pass = req.body.password;
        res.send(`login: ${login}, pass: ${pass}`);
    } );

    this.router.post('/login/:some', (req, res ) => {
        res.send(`${req.params.some}`);
    });
}

getRouter(): express.Router {
return this.router;
};
}