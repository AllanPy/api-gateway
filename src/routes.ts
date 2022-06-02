import httpProxy from 'express-http-proxy';
import { Express } from 'express';
import isAuthenticated from './utils';

const userServiceProxy = httpProxy('http://localhost:4000');
const orderServiceProxy = httpProxy('http://localhost:2000');

class Routes {
 private app: Express;
  constructor(app: Express) {
    this.app = app;
  }


  public appRoutes() {
    this.app.use((req, res, next) => {
      if (isAuthenticated(req)) {
        next();
      } else {
        res.status(401).send("Unauthorized");
      }
    });

    this.app.get('/getUserDetails/:userId', (req, res, next) => {
      userServiceProxy(req, res, next);
    });

    this.app.post('/order', (req, res, next) => {
      orderServiceProxy(req, res, next);
    });

  }

  public routesConfig() {
    this.appRoutes();
  }
}

export default Routes;
