import {
  StudentRegisterService,
  ListCoursesService,
  CourseEnrolService,
} from "../services/studentServices.js";

export class RegisterStudent {
  constructor(private studentRegisterService: StudentRegisterService) {}

  registerStudent = async (req: any, res: any) => {
    const { name, email } = req.body;
    const student = await this.studentRegisterService.registerStudent(
      name,
      email,
    );
    res.json({ "Registration successful": student });
  };

  getProfile = async (req: any, res: any) => {
    const { email } = req.body;
    const profile = await this.studentRegisterService.showProfile(email);
    res.json({ "Profile Details": profile });
  };
}

export class ListCourses {
  constructor(private listCourses: ListCoursesService) {}

  courseList = async (req: any, res: any) => {
    const courses = await this.listCourses.listCourse();
    res.json({ "Available courses": courses });
  };
}

export class EnrolToCourse {
  constructor(private courseEnrol: CourseEnrolService) {}

  enrolCourse = async (req: any, res: any) => {
    const { courseId, email } = req.body;
    const enrolled = await this.courseEnrol.enrolToCourse(courseId, email);
    res.json(enrolled);
  };
}
