require("dotenv-flow").config({
  path: "./src/Config",
});

import WebServer from "./Helper/Server";

export var Serveur = new WebServer(Number(process.env.PORT) || 5000);

console.log("Server Startup  ", process.env.TEST);

Serveur.ListenServer(() => {
  console.log(
    `Serveur web démarre, Écoute du port ${Number(process.env.PORT) || 5000}`
  );
});
