import {
  StudentRepository,
  ListCoursesRepository,
  CourseEnrolRepository,
  LoginRepository,
} from "../repositories/mongoRepositories/studentRepository.js";
import {
  StudentRegisterService,
  ListCoursesService,
  CourseEnrolService,
  LoginSerrvice,
} from "../services/studentServices.js";
import {
  RegisterStudent,
  ListCourses,
  EnrolToCourse,
  LoginController,
  LogoutController,
} from "../controllers/studentController.js";
import {
  SqlCourseEnrolRepository,
  SqlListCoursesRepository,
  SqlStudentRepository,
} from "../repositories/sqlRepositories/userRepository.js";
import { SqlLoginRepository } from "../repositories/sqlRepositories/adminRepository.js";

const studentRegisterRepo = new StudentRepository();
const sqlStudentRegisterRepo = new SqlStudentRepository();
const studentRegisterService = new StudentRegisterService(
  studentRegisterRepo,
  sqlStudentRegisterRepo,
);
const studentRegisterController = new RegisterStudent(studentRegisterService);

const loginRepo = new LoginRepository();
const sqlLoginRepo = new SqlLoginRepository();
const loginServices = new LoginSerrvice(loginRepo, sqlLoginRepo);
const loginController = new LoginController(loginServices);

const listCoursesRepo = new ListCoursesRepository();
const sqlListCoursesRepo = new SqlListCoursesRepository();
const listCoursesService = new ListCoursesService(
  listCoursesRepo,
  sqlListCoursesRepo,
);
const listCoursesController = new ListCourses(listCoursesService);

const courseEnrolRepo = new CourseEnrolRepository();
const sqlCourseEnrolRepo = new SqlCourseEnrolRepository();
const courseEnrolService = new CourseEnrolService(
  courseEnrolRepo,
  sqlCourseEnrolRepo,
);
const courseEnrolController = new EnrolToCourse(courseEnrolService);


const logoutController=new LogoutController();


export default {
  studentRegisterController,
  loginController,
  listCoursesController,
  courseEnrolController,
  logoutController
};
