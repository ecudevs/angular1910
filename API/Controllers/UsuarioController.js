const Usuario = require("../Models/Usuario");
const md5 = require("md5");

function UsuarioController() {
  this.verificarUsuario = async function(userPass, res) {
    console.log(md5(userPass.contrasena));
    let usuario = await Usuario.findOne({
      usuario: userPass.usuario.toLowerCase().trim(),
      contrasena: md5(userPass.contrasena)
    });

    if (!usuario) {
      res.status(403).send({ mensaje: "Usuario o contrasena invalidos!" });
    } else {
      res.send({ usuario: usuario.usuario });
    }
  };
}

module.exports = new UsuarioController();
