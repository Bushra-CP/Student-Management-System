import type { Request, Response } from "express";
import {
  AdminServices,
  LoginSerrvice,
  StudentsListServices,
} from "../services/adminServices.js";

export class LoginController {
  constructor(private loginService: LoginSerrvice) {}

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const result = await this.loginService.login(email, password);

      // console.log(res);

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

export class AdminController {
  constructor(private adminService: AdminServices) {}

  createCourse = async (req: Request, res: Response) => {
    const { courseName, description } = req.body;
    const course = await this.adminService.create(courseName, description);
    res.json({
      "new course created": {
        courseName: course?.courseName,
        description: course?.description,
      },
    });
  };
}

export class ListStudents {
  constructor(private listStudents: StudentsListServices) {}

  studentsList = async (req: Request, res: Response) => {
    const students = await this.listStudents.students();
    res.json({ "Students Details": students });
  };
}

export class LogoutController {
  logout = async (req: Request, res: Response) => {
    res.json({
      message: "Logged out successfully",
    });
  };
}
