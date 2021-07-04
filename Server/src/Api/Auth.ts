import Router from "@koa/router";
import {
  getPayloadJson,
  getToken,
  getTokenContent,
  validateToken,
} from "../Helper/jwt";
import {
  validateMail,
  validateNameSurname,
  validatePassword,
  validateUsername,
} from "../Helper/Validate";
import { checkPassword, hashPassword } from "../Helper/Password";
import User from "../Model/User";

var router = new Router();

router
  .get("/", async (ctx: any, next: any) => {
    var Token = ctx.get("Authentification");
    if (validateToken(Token, false)) {
      var user = await User.findOne({
        Username: getPayloadJson(await getTokenContent(Token, false)).Username,
      });
      ctx.body = {
        Username: user.Username,
        Name: user.Name,
        Surname: user.Surname,
        ProfilePic: user.ProfilePic,
        UiColor: user.UiColor,
      };
    } else {
      ctx.throw(401, { message: "Votre token n'est plus valide" });
    }
    await next();
  })
  .post("/login", async (ctx: any, next: any) => {
    var { Username, Password } = ctx.request.body;
    if (Username === undefined && Password === undefined) {
      ctx.throw(401, { message: "Vos identifiant ne sont pas valide" });
    } else {
      var user = User.findOne({
        Username,
      });

      if (user && checkPassword(Password, user.Password)) {
        var Token = await getToken(
          { Username: user.Username, Name: user.Name },
          true
        );
        if (user.Token.length > 5) {
          user.Token.shift();
        }
        user.Token.push(Token);
        user.save();
        ctx.body = {
          message: "Here is your Token, nice use",
          Token: Token,
        };
      } else {
        ctx.throw(401, { message: "No User Found" });
      }
    }

    await next();
  })
  .post("/logout", async (ctx: any, next: any) => {
    var Token = ctx.get("Authentification");
    if (validateToken(Token, true)) {
      var user = await User.findOne({
        Username: getPayloadJson(await getTokenContent(Token, true)).Username,
      });
      if (user.Token.include(Token)) {
        user.Token.splice(
          user.Token.findIndex((value: string) => value === Token),
          1
        );
        ctx.body = {
          message: "Vous êtes bien déconnecter",
        };
      } else {
        ctx.throw(401, {
          message:
            "Vous ne pouvez pas vous déconnecter si vous n'êtes pas connectable",
        });
      }
    } else {
      ctx.throw(401, {
        message:
          "Vous ne pouvez pas vous déconnecter si vous n'êtes pas connecter",
      });
    }
    await next();
  })
  .post("/register", async (ctx: any, next: any) => {
    var { Username, Password, Name, Surname, Email, AllowEmail } =
      ctx.request.body;
    if (
      !validateUsername(Username) ||
      !validatePassword(Password) ||
      !validateNameSurname(Name) ||
      !validateNameSurname(Surname) ||
      !validateMail(Email)
    ) {
      ctx.throw(401, {
        message: "Un problème est présent sur les donnée du formulaire",
        Username: !validateUsername(Username),
        Password: !validatePassword(Password),
        Name: !validateNameSurname(Name),
        Surname: !validateNameSurname(Surname),
        Email: !validateMail(Email),
        AllowEmail: AllowEmail === undefined,
      });
    } else {
      var AUser =
        (await User.findOne({
          Username,
        })) === undefined;
      AUser =
        AUser === true &&
        (await User.findOne({
          Email,
        })) === undefined;
      if (AUser) {
        var user = new User({
          Username,
          Password: hashPassword(Password),
          Name,
          Surname,
          Email,
          AllowEmail,
        });
        await user.save();
        ctx.body = {
          message: "AllIsGood Please auth with the login form",
        };
      } else {
        ctx.throw(400, { message: "A User already exist" });
      }
    }
    await next();
  })
  .post("/renew", async (ctx: any, next: any) => {
    var Token = ctx.get("Authentification");
    if (validateToken(Token, true)) {
      var user = await User.findOne({
        Username: getPayloadJson(await getTokenContent(Token, true)).Username,
      });
      if (user.Token.include(Token)) {
        ctx.body = {
          message: "here is your Use Token",
          Token: getToken(
            getPayloadJson(await getTokenContent(Token, true)),
            false
          ),
        };
      } else {
        ctx.throw(401, {
          message: "Vous n'êtes plus connecter",
        });
      }
    } else {
      ctx.throw(401, { message: "Votre renew token n'est plus valide" });
    }
    await next();
  });

export default router;
