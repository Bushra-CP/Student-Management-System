import express from "express";
const router = express.Router();
import adminDependency from "../container/adminDependency.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";

router.post("/login", adminDependency.loginController.login);

router.post(
  "/createCourse",
  authMiddleware,
  roleMiddleware("Admin"),
  adminDependency.createCourseController.createCourse,
);

router.get(
  "/listStudents",
  authMiddleware,
  roleMiddleware("Admin"),
  adminDependency.listStudentsController.studentsList,
);

router.post(
  "/logout",
  authMiddleware,
  roleMiddleware("Admin"),
  adminDependency.adminLogoutController.logout,
);

export default router;
