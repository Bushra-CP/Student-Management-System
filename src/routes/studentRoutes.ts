import express from "express";
const router = express.Router();
import studentDependency from "../container/studentDependency.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";

router.post(
  "/studentRegister",
  studentDependency.studentRegisterController.registerStudent,
);

router.post("/login", studentDependency.loginController.login);

router.get("/listCourses", studentDependency.listCoursesController.courseList);

router.patch(
  "/enrolToCourse",
  authMiddleware,
  roleMiddleware("Student"),
  studentDependency.courseEnrolController.enrolCourse,
);

router.get(
  "/profile",
  authMiddleware,
  roleMiddleware("Student"),
  studentDependency.studentRegisterController.getProfile,
);

router.post(
  "/logout",
  authMiddleware,
  roleMiddleware("Student"),
  studentDependency.logoutController.logout,
);

export default router;
