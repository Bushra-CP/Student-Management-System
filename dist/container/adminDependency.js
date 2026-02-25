import { AdminRepository, StudentsListRepository, } from "../repositories/adminRepository.js";
import { AdminServices, StudentsListServices, } from "../services/adminServices.js";
import { AdminController, ListStudents, } from "../controllers/adminController.js";
const createCourseRepo = new AdminRepository();
const createCourseService = new AdminServices(createCourseRepo);
const createCourseController = new AdminController(createCourseService);
const listStudentsRepo = new StudentsListRepository();
const listStudentsServices = new StudentsListServices(listStudentsRepo);
const listStudentsController = new ListStudents(listStudentsServices);
export default {
    createCourseController,
    listStudentsController,
};
//# sourceMappingURL=adminDependency.js.map