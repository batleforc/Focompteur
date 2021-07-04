import Router from "@koa/router";
import Auth from "./Auth";
var router = new Router({
  prefix: "/Api",
});

router.get("/", async (ctx: any, next: any) => {
  ctx.body = "Hello World";
  await next();
});

router.use("/Auth", Auth.routes(), Auth.allowedMethods());

export default router;
