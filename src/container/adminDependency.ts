import {
  AdminRepository,
  LoginRepository,
  StudentsListRepository,
} from "../repositories/mongoRepositories/adminRepository.js";
import {
  AdminServices,
  LoginSerrvice,
  StudentsListServices,
} from "../services/adminServices.js";
import {
  AdminController,
  ListStudents,
  LoginController,
  LogoutController,
} from "../controllers/adminController.js";
import {
  SqlAdminRepository,
  SqlLoginRepository,
  SqlStudentsListRepository,
} from "../repositories/sqlRepositories/adminRepository.js";

const loginRepo = new LoginRepository();
const sqlLoginRepo = new SqlLoginRepository();
const loginServices = new LoginSerrvice(loginRepo, sqlLoginRepo);
const loginController = new LoginController(loginServices);

const createCourseRepo = new AdminRepository();
const sqlCreateCourseRepo = new SqlAdminRepository();
const createCourseService = new AdminServices(
  createCourseRepo,
  sqlCreateCourseRepo,
);
const createCourseController = new AdminController(createCourseService);

const listStudentsRepo = new StudentsListRepository();
const sqlListStudentsRepo = new SqlStudentsListRepository();
const listStudentsServices = new StudentsListServices(
  listStudentsRepo,
  sqlListStudentsRepo,
);
const listStudentsController = new ListStudents(listStudentsServices);

const adminLogoutController=new LogoutController();

export default {
  loginController,
  createCourseController,
  listStudentsController,
  adminLogoutController
};
