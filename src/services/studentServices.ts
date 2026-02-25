import type {
  StudentRepoInterface,
  courseEnrolRepoInterface,
  ListCourses,
} from "../interfaces/studentRepositoryInterface.js";

export class StudentRegisterService {
  constructor(private studentRepo: StudentRepoInterface) {}

  // Student Registration
  async registerStudent(name: string, email: string) {
    return this.studentRepo.create({
      name,
      email,
    });
  }

  async showProfile(email: string) {
    return this.studentRepo.findByMail(email);
  }
}

export class ListCoursesService {
  constructor(private courses: ListCourses) {}

  async listCourse() {
    return this.courses.listCourse();
  }
}

export class CourseEnrolService {
  constructor(private enrol: courseEnrolRepoInterface) {}

  async enrolToCourse(courseId: string, email: string) {
    return this.enrol.enrolToCourse(courseId, email);
  }
}
