require("dotenv-flow").config({
  path: "./src/Config",
});
console.log("Server Startup  ", process.env.TEST);
