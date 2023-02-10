const { Router } = require('express');

const {getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee} = require ('../controller/Employee.controller')

const router = Router();

router.get("/listar", getAllEmployees);
router.get("/listar/:id", getEmployeeById);
router.post("/create", createEmployee)
router.put("/update/:id", updateEmployee);
router.delete("/delete/:id", deleteEmployee)



module.exports = router;