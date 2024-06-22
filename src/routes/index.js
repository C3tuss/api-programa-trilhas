import express from "express";
//importa rota from rota.js


const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("API Trilhas"));

    app.use(express.json(), /*rota*/);
};

export default routes;