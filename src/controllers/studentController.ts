import { StudentService } from "../services/studentServices.js";

export class StudentController {
  constructor(private studentService: StudentService) {}

  registerStudent = async (req: any, res: any) => {
    const { name, email } = req.body;
    const student = await this.studentService.registerStudent(name, email);
    res.json(student);
  };
}
