const conectarBD = require("../db/condb.js");

exports.getAllIntegrantes = async (req, res) => {
  try {
    const [result] = await conectarBD.query(
      "SELECT * FROM integrantes ORDER BY createdAt ASC"
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

exports.getCountProgramas = async (req, res) => {
  try {
    const [result] = await conectarBD.query(
      `SELECT programa, COUNT(*) total 
        FROM integrantes i
        INNER JOIN programas p ON p.programa_id = i.programa_id
        GROUP BY programa
        ORDER BY total DESC`
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

exports.createIntegrantes = async (req, res) => {
  try {
    const { id, nombre, apellidos, cedula, fecha_nacimiento, edad, programa_id } = req.body;
    const [result] = await conectarBD.query(
      "INSERT INTO integrantes (id, nombre, apellidos, cedula, fecha_nacimiento, edad, programa_id) VALUES (?,?,?,?,?,?,?)",
      [id, nombre, apellidos, cedula, fecha_nacimiento, edad, programa_id]
    );
    res.json({
      id: result.insertId,
      nombre,
      apellidos,
      cedula,
      fecha_nacimiento,
      edad,
      programa_id,
      msg: "El integrante fue guardado exitosamente",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

