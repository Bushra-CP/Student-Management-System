import express from "express";
const router = express.Router();
import adminDependency from "../container/adminDependency.js";
router.post("/createCourse", adminDependency.createCourseController.createCourse);
router.get("/listStudents", adminDependency.listStudentsController.studentsList);
export default router;
//# sourceMappingURL=adminRoutes.js.map