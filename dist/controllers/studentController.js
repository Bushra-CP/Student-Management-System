import { StudentService } from "../services/studentServices.js";
export class StudentController {
    studentService;
    constructor(studentService) {
        this.studentService = studentService;
    }
    registerStudent = async (req, res) => {
        const { name, email } = req.body;
        const student = await this.studentService.registerStudent(name, email);
        res.json(student);
    };
}
//# sourceMappingURL=studentController.js.map