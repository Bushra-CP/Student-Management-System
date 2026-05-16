import type { Request, Response } from "express";
import {
  StudentRegisterService,
  ListCoursesService,
  CourseEnrolService,
  LoginSerrvice,
} from "../services/studentServices.js";

//REGISTER AND GET PROFILE OF A STUDENT
export class RegisterStudent {
  constructor(private studentRegisterService: StudentRegisterService) {}

  registerStudent = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const student = await this.studentRegisterService.registerStudent(
      name,
      email,
      password,
    );

    res.json({
      "Registration successful": {
        name: student?.name,
        email: student?.email,
      },
    });
  };

  getProfile = async (req: Request, res: Response) => {
    const email = (req as any).user.email;
    const profile = await this.studentRegisterService.showProfile(email);
    res.json({ "Profile Details": profile });
  };
}

//LOGIN
export class LoginController {
  constructor(private loginService: LoginSerrvice) {}

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const result = await this.loginService.login(email, password);

      res.status(200).json({
        success: true,
        message: "Login successful",
        token: result.token,
        user: result.user,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
}

//LIST COURSES
export class ListCourses {
  constructor(private listCourses: ListCoursesService) {}

  courseList = async (req: Request, res: Response) => {
    const courses = await this.listCourses.listCourse();
    res.json({ "Available courses": courses });
  };
}

//ENROL TO A COURSE
export class EnrolToCourse {
  constructor(private courseEnrol: CourseEnrolService) {}

  enrolCourse = async (req: Request, res: Response) => {
    const { courseId } = req.body;
    const email = (req as any).user.email;

    const enrolled = await this.courseEnrol.enrolToCourse(courseId, email);
    res.json(enrolled);
  };
}

//LOGOUT
export class LogoutController {
  logout = async (req: Request, res: Response) => {
    res.json({
      message: "Logged out successfully",
    });
  };
}
