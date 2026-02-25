import express from "express";
const router = express.Router();
import { StudentRepository } from "../repositories/studentRepository.js";
import { StudentService } from "../services/studentServices.js";
import { StudentController } from "../controllers/studentController.js";
const repo = new StudentRepository();
const service = new StudentService(repo);
const controller = new StudentController(service);
router.post("/studentRegister", controller.registerStudent);
export default router;
//# sourceMappingURL=studentRoutes.js.map