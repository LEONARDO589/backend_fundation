const ProgramaModel = require("../models/Programa");

exports.getAllProgramas = async (req, res) => {
    try {
      const programas = await ProgramaModel.findAll();
      res.json(programas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  