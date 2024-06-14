import app from "./configs/express.config.js";

app.use("/usuarios", (_, res) => {
    res.status(501).send("Rota não implementada");
});

app.get("/", (_, res) => {
    res.status(200).send("I'm alive.");
});

app.get("*", (req, res) => {
    res.status(404).send("Endpoint não encontrado.");
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Erro interno.");
});

export default app;