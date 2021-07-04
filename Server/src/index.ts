require("dotenv-flow").config({
  path: "./src/Config",
});
console.log("Server Startup  ", process.env.TEST);
import Connection from "./Helper/dataBase";
import WebServer from "./Helper/Server";
import Api from "./Api/Api";
export var Serveur = new WebServer(Number(process.env.PORT) || 5000);

Connection.once("open", () => console.log("DatabaseOn"));
Connection.on(
  "error",
  console.error.bind(console, "The database as encounter an error:")
);

Serveur.AddRouter(Api);

Serveur.ListenServer(() => {
  console.log(
    `Serveur web démarre, Écoute du port ${Number(process.env.PORT) || 5000}`
  );
});
