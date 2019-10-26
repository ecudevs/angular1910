const Tarea = require("../Models/Tarea");

const ObjectId = require("mongoose").Types.ObjectId;

function TareaContoller() {
  this.getTareas = function(res) {
    Tarea.find()
      .then(tareas => {
        console.log(1);
        res.send({ tareas });
      })
      .catch(error => {
        console.log(error);
        res.status(500).send({ error });
      });

    console.log(2);
  };

  this.getTareaById = async function(_id, res) {
    try {
      console.log(1);
      let tarea = await Tarea.findById(ObjectId(_id));
      console.log(2);
      res.send({ tarea });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error });
    }
  };

  this.insert = async function(tarea, res) {
    try {
      let tareaInsertada = await new Tarea(tarea).save();
      res.send({ tarea: tareaInsertada });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error });
    }
  };

  this.update = async function(tarea, res) {
    try {
      let tareaActualiazada = await Tarea.findByIdAndUpdate(
        ObjectId(tarea._id),
        tarea
      );
      res.send({ tarea: tareaActualiazada });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error });
    }
  };
}

module.exports = new TareaContoller();
