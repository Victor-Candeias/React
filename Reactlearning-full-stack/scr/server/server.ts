import  express from "express";
import os from "node:os";

import config from "./config";
import apiRouter from "./api-router";

// define para uma constante o server
const server = express();

// define o endpoint
server.use("/api", apiRouter);

// permite usar css e outros ficheiros como static para aceder a eles
server.use(express.static("dist"));;

// consigura ejs as view engine of the project
server.set("view engine", "ejs");

// home page
// apenas pedidos GET são permitido aqui
server.get("/", (req, res) => {
    // Chamada normal
    res.render("index", {
        initialContent: "Loading...",
    });
});

// inicia o servidor
server.listen(config.PORT, config.HOST, () => {
    console.info("Express server is listening at" + config.SERVER_URL,
        "Free Mem: " + os.freemem() / 1024 /1024,
    );
});