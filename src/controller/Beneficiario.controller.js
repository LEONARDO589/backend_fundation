const { Sequelize } = require("sequelize");

const BeneficiarioModel = require("../models/Beneficiarios");
const ProgramaModel = require("../models/Programa");

exports.getAllBeneficiario = async (req, res) => {
  try {
    const beneficiarios = await BeneficiarioModel.findAll();
    res.json(beneficiarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBeneficiarioById = async (req, res) => {
  try {
    const beneficiario = await BeneficiarioModel.findByPk(req.params.id);
    if (!beneficiario) {
      res.status(404).json({ message: "No se encuentra Beneficiario" });
    } else {
      res.status(200).json(beneficiario);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBeneficiario = async (req, res) => {
  try {
    const beneficiario = await BeneficiarioModel.create(req.body);
    res.status(201).json(beneficiario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateBeneficiario = async (req, res) => {
  try {
    const beneficiario = await BeneficiarioModel.findByPk(req.params.id);
    if (!beneficiario) {
      res.status(404).json({ message: "No se puede actualizar el Beneficiario" });
    } else {
      await beneficiario.update(req.body);
      res.status(200).json(beneficiario);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBeneficiario = async (req, res) => {
  try {
    const beneficiario = await BeneficiarioModel.findByPk(req.params.id);
    if (!beneficiario) {
      res.status(404).json({ message: "No se puede eliminar el Beneficiario" });
    } else {
      await beneficiario.destroy();
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

BeneficiarioModel.belongsTo(ProgramaModel, { foreignKey: "programa_id" });
ProgramaModel.hasMany(BeneficiarioModel, { foreignKey: "programa_id" });

exports.getBeneficiario_programas = async (req, res) => {
  try {
    const desciariostotal = await ProgramaModel.findAll({
      include: [{ model: BeneficiarioModel }],
    });
    res.json(desciariostotal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBeneficiario_total = async (req, res) => {
  try {
    const totalBeneficiarios = await BeneficiarioModel.findAll({
      attributes: [
        "programa_id",
        [
          Sequelize.fn("COUNT", Sequelize.col("programa")),
          "total_Beneficiarios",
        ],
      ],
      include: [{ model: ProgramaModel }],
      group: ["programa_id"],
    });
    res.json(totalBeneficiarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
