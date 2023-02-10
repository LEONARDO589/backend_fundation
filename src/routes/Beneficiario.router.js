const { Router } = require('express');

const {getAllBeneficiario, getBeneficiarioById, createBeneficiario, updateBeneficiario, deleteBeneficiario, getBeneficiario_programas, getBeneficiario_total} = require ('../controller/Beneficiario.controller')

const router = Router();

router.get("/listar", getAllBeneficiario);
router.get("/listar/:id", getBeneficiarioById);
router.post("/create", createBeneficiario)
router.put("/update/:id", updateBeneficiario);
router.delete("/delete/:id", deleteBeneficiario);

router.get("/listado", getBeneficiario_programas);
router.get("/total", getBeneficiario_total)


module.exports = router;