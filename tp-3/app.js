const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


let alumnosPorCliente = {};

// Crear ID
app.get("/identificar", (req, res) => {
    const id = uuidv4();

    if (!alumnosPorCliente[id]) {
        alumnosPorCliente[id] = [];
    }

    res.json({ id });
});

// Guardar alumno
app.post("/alumnos", (req, res) => {
    const { id, nombre, edad, nota } = req.body;

    if (!alumnosPorCliente[id]) {
        alumnosPorCliente[id] = [];
    }

    alumnosPorCliente[id].push({
        nombre,
        edad: parseInt(edad),
        nota: parseFloat(nota)
    });

    res.json({ mensaje: "Guardado" });
});

// Obtener alumnos
app.get("/alumnos/:id", (req, res) => {
    const id = req.params.id;
    res.json(alumnosPorCliente[id] || []);
});

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});