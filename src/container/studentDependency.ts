import {
  StudentRepository,
  ListCoursesRepository,
  CourseEnrolRepository,
} from "../repositories/studentRepository.js";
import {
  StudentRegisterService,
  ListCoursesService,
  CourseEnrolService,
} from "../services/studentServices.js";
import {
  RegisterStudent,
  ListCourses,
  EnrolToCourse,
} from "../controllers/studentController.js";

const studentRegisterRepo = new StudentRepository();
const studentRegisterService = new StudentRegisterService(studentRegisterRepo);
const studentRegisterController = new RegisterStudent(studentRegisterService);

const listCoursesRepo = new ListCoursesRepository();
const listCoursesService = new ListCoursesService(listCoursesRepo);
const listCoursesController = new ListCourses(listCoursesService);

const courseEnrolRepo = new CourseEnrolRepository();
const courseEnrolService = new CourseEnrolService(courseEnrolRepo);
const courseEnrolController = new EnrolToCourse(courseEnrolService);

export default {
  studentRegisterController,
  listCoursesController,
  courseEnrolController,
};
