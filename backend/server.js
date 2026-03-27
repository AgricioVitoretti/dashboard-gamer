const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Backend da dashboard está rodando");
});

app.get("/api/games", (req,res) => {
    const games =[
        { id: 1, name: "God of War", genre: "Ação", plataform: "Playstation" },
        { id: 2, name: "Elden ring", genre: "RPG", plataform: "PC" },
        { id: 3, name: "Forza horizon 5", genre: "Corrida", plataform: "Xbox" },
    ];

    res.json(games);
});

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}');
});