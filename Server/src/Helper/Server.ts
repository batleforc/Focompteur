import Router from "koa-router";
import cors from "@koa/cors";
import { Server, Socket } from "socket.io";
import serve from "koa-static";
import path from "path";
import fs from "fs";

var Koa = require("koa");
var KoaBody = require("koa-body");
var mount = require("koa-mount");
class WebServer {
  app: any;
  io: any;
  server: any;
  Port: number;
  constructor(Port: number) {
    this.Port = Port;
    this.app = new Koa();
    this.server = require("http").createServer(this.app.callback());
    this.io = new Server(this.server, {
      cors: {
        origin: "*",
      },
    });
    var static_pages = new Koa();
    static_pages.use(
      serve(path.resolve(__dirname, "..", "..", "Client", "build"))
    );
    this.app.use(mount("/", static_pages));
    this.app.use(cors());
    this.app.use(KoaBody());
  }

  GetApp = () => this.app;
  GetSocket = () => this.io;
  GetServer = () => this.server;

  // KOA
  AddRouter = (router: Router) =>
    this.app.use(router.routes()).use(router.allowedMethods());

  ListenServer = (callback: Function) => {
    this.app.use(async (ctx: any, next: any) => {
      if (ctx.body === undefined) {
        ctx.type = "html";
        try {
          ctx.body = fs.readFileSync(
            path.resolve(__dirname, "..", "..", "Client", "build", "index.html")
          );
        } catch (error) {
          ctx.body = "<h1>Erreur 404 pas de client trouver</h1>";
        }
      }
      await next();
    });
    this.server.listen(this.Port, callback);
  };

  AddToAppContext = (key: string, ContextObject: object) =>
    (this.app.context[key] = ContextObject);

  MountStatic = (where: string, koaMiddleware: any) =>
    this.app.use(mount(where, koaMiddleware));

  // SOCKET.IO
  AddListener = (event: string, whatToDo: Function) =>
    this.io.on("connection", (Sock: Socket) => {
      Sock.on(event, (param: any) => whatToDo(Sock, param));
    });
}

export default WebServer;
