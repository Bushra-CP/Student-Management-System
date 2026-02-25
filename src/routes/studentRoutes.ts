import express from "express";
const router = express.Router();
import studentDependency from "../container/studentDependency.js";

router.post(
  "/studentRegister",
  studentDependency.studentRegisterController.registerStudent,
);
router.get("/listCourses", studentDependency.listCoursesController.courseList);
router.patch(
  "/enrolToCourse",
  studentDependency.courseEnrolController.enrolCourse,
);
router.get("/profile", studentDependency.studentRegisterController.getProfile);

export default router;
