
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const UserModel = require("../models/User");


exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUserVali = async (req, res) => {
  //revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { user, password } = req.body;

  try {
    //Revisar que el usuario registrado sea único
    let usuario = await UserModel.findOne({ where: {
        user: user,
    } });

    if (usuario) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }
    //crear el nuevo usuario
    usuario = new UserModel(req.body);

    usuario.password = await bcryptjs.hash(password, 10);

    //Guardar usuario en la bd
    await usuario.save();

    //Firmar el JWT
    const payload = {
      usuario: { id: usuario.id },
    };
    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600,
      },
      (error, token) => {
        if (error) throw error;
        //Mensaje de confirmacition;
        res.json({ token });
      }
    );
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};
