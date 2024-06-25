import express from "express";
import usuarios from "./usuario.route.js"


const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("API Trilhas"));

    app.use(express.json(), usuarios);
};

export default routes;