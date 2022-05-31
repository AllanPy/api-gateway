import express, { Express } from "express";
import debug from "debug";
import http from "http";
import Routes from "./routes";
import env from "./config/environment";

const logger = debug("log");

class Server {
  private app: Express;
  private http: http.Server;

  constructor() {
    this.app = express();
    this.http = http.createServer(this.app);
  }

  /* Including app Routes starts */
  includeRoutes() {
    new Routes(this.app).routesConfig();
  }
  /* Including app Routes ends */

  startServer() {
    this.includeRoutes();

    const port = process.env.NODE_SERVER_POST || 8000;
    const host = process.env.NODE_SERVER_HOST || "localhost";

    this.http.listen(port, () => {
      this.app.set("host", `http://localhost:${env.PORT}`);
      logger(`Application running on port ${env.PORT}`);
    });
  }
}

export default Server;

