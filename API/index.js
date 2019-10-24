const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

const tareas = require("./constants");

app.get("/tareas", (req, res) => {
  res.send({ tareas });
});

app.post("/tarea", (req, res) => {
  console.log(req.body);
  tareas.push({ ...req.body, _id: tareas.length + 1 });
  console.log(1);
  res.send({ mensaje: "Tarea insertada!" });
});

app.put("/hola", (req, res) => {
  res.send("hola put 1 " + JSON.stringify(req.body));
});

app.delete("/hola", (req, res) => {
  console.log(req.query);
  res.send("hola " + req.query.nombre + " " + req.query.apellido);
});

const port = process.env.PORT || "9000";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Mag Happens on port: ${port}`));
