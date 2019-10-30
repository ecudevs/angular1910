const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const TareaController = require("./Controllers/TareaController");
const UsuarioController = require("./Controllers/UsuarioController");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

const tareas = require("./constants");

app.post("/login", (req, res) => {
  UsuarioController.verificarUsuario(req.body, res);
});

app.get("/tareas", (req, res) => {
  TareaController.getTareas(res);
});

app.get("/tarea/:idTarea", (req, res) => {
  TareaController.getTareaById(req.params.idTarea, res);
});

app.post("/tarea", (req, res) => {
  TareaController.insert(req.body, res);
});

app.put("/tarea", (req, res) => {
  TareaController.update(req.body, res);
});

app.delete("/tarea/:idTarea", (req, res) => {
  TareaController.remove(req.params.idTarea, res);
});

app.delete("/hola", (req, res) => {
  console.log(req.query);
  res.send("hola " + req.query.nombre + " " + req.query.apellido);
});

app.use(express.static(path.join(__dirname, "../dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

mongoose.connect(
  "mongodb://heroku_lkdpvq3k:8kur5bv4sjgvdeoe3usgpd3aqg@ds133556.mlab.com:33556/heroku_lkdpvq3k",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const port = process.env.PORT || "9000";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Mag Happens on port: ${port}`));
