import Router from "@koa/router";

var router = new Router({
  prefix: "/Api",
});

router.get("/", async (ctx: any, next: any) => {
  ctx.body = "Hello World";
  await next();
});

export default router;
