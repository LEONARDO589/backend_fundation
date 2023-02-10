const conectarBD = require("../db/condb.js");

exports.getAllContacto = async (req, res) => {
  try {
    const [result] = await conectarBD.query(
      "SELECT * FROM contacto ORDER BY createdAt ASC"
    );
    if (result.length === 0)
      return res
        .status(404)
        .json({ message: "No hay registros en la base de datos" });
    // se realiza la consulta a la base y devuelve .json
    res.json(result);
  } catch (error) {
    return res.status(500).json({ menssage: error.message });
  }
};


exports.createContacto = async (req, res ) => {
    try {
        const {id, nombre, email, asunto, mensaje } = req.body;
        const [result] = await conectarBD.query("INSERT INTO contacto (id, nombre, email, asunto, mensaje) VALUES (?,?,?,?,?)",
        [
            id, nombre, email, asunto, mensaje
        ])
        res.json({
            id: result.insertId,
            nombre, 
            email,
            asunto, 
            mensaje,
            msg:"El contacto fue guardado exitosamente"
        })
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}