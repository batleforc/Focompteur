import Router from "@koa/router";
import { validateToken } from "../Helper/jwt";

var router = new Router();

router
  .get("/", async (ctx: any, next: any) => {
    var Token = ctx.get("Authentification");
    if (validateToken(Token, false)) {
      console.log("Return user");
      ctx.body = "test";
    } else {
      ctx.throw(401, "Votre token n'est plus valide");
    }
    await next();
  })
  .post("/login", async (ctx: any, next: any) => {
    var { Username, Password } = ctx.request.body;
    if (Username === undefined && Password === undefined) {
    }

    await next();
  })
  .post("/logout", async (ctx: any, next: any) => {
    var { Token } = ctx.request.body;
  })
  .post("/register", async (ctx: any, next: any) => {
    var {
      Username,
      Password,
      Name,
      Surname,
      Email,
      AllowEmail,
      ProfilePic,
      UiColor,
    } = ctx.request.body;
  })
  .post("/renew", async (ctx: any, next: any) => {
    var Token = ctx.get("Authentification");
    if (validateToken(Token, true)) {
      console.log("Return user");
      ctx.body = "test";
    } else {
      ctx.throw(401, "Votre renew token n'est plus valide");
    }
  });

export default router;
