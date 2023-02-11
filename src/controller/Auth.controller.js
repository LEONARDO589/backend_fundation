const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/User");


exports.autenticarUsuario = async (req, res) => {
  //Revisar si hay errores

  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { user, password } = req.body;
  try {
    //revisar que sea un usuario registrado
    let usuario = await UserModel.findOne({ where: {
        user: user,
    } });

    if (!usuario) {
      return res.status(400).json({ msg: "El usuario no existe" });
    }

    //revisar la password
    const passCorrecto = await bcryptjs.compare(password, usuario.password);
    if (!passCorrecto) {
      return res.status(400).json({ msg: "Contraseña incorrecta" });
    }

    //Si todo es correcto, crear y firmar el token

    const payload = {
      usuario: { id: usuario.id },
    };

    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600, //1 hora
      },
      (error, token) => {
        if (error) throw error;

        //Mensaje de confirmación
        res.json({ token });
      }
    );
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};

exports.usuarioAutenticado = async (req, res) => {
  try {
    const usuario = await UserModel.findById(req.usuario.id);
    res.json({ usuario });
  } catch (error) {
    res.status(500).json({ msg: "Hubo un error" });
  }
};
