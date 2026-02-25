import { AdminServices, StudentsListServices } from "../services/adminServices.js";

export class AdminController {
  constructor(private adminService: AdminServices) {}

  createCourse = async (req: any, res: any) => {
    const { courseName, description } = req.body;
    const course = await this.adminService.create(courseName, description);
    res.json({ "new course created": course });
  };
}

export class ListStudents {
  constructor(private listStudents: StudentsListServices) {}

  studentsList = async (req: any, res: any) => {
    const students = await this.listStudents.students();
    res.json({ "Students Details": students });
  };
}
