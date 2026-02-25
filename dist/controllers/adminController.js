import { AdminServices, StudentsListServices } from "../services/adminServices.js";
export class AdminController {
    adminService;
    constructor(adminService) {
        this.adminService = adminService;
    }
    createCourse = async (req, res) => {
        const { courseName, description } = req.body;
        const course = await this.adminService.create(courseName, description);
        res.json({ "new course created": course });
    };
}
export class ListStudents {
    listStudents;
    constructor(listStudents) {
        this.listStudents = listStudents;
    }
    studentsList = async (req, res) => {
        const students = await this.listStudents.students();
        res.json({ "Students Details": students });
    };
}
//# sourceMappingURL=adminController.js.map