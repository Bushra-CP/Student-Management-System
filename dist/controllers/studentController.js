import { StudentRegisterService, ListCoursesService, CourseEnrolService, } from "../services/studentServices.js";
export class RegisterStudent {
    studentRegisterService;
    constructor(studentRegisterService) {
        this.studentRegisterService = studentRegisterService;
    }
    registerStudent = async (req, res) => {
        const { name, email } = req.body;
        const student = await this.studentRegisterService.registerStudent(name, email);
        res.json({ "Registration successful": student });
    };
    getProfile = async (req, res) => {
        const { email } = req.body;
        const profile = await this.studentRegisterService.showProfile(email);
        res.json({ "Profile Details": profile });
    };
}
export class ListCourses {
    listCourses;
    constructor(listCourses) {
        this.listCourses = listCourses;
    }
    courseList = async (req, res) => {
        const courses = await this.listCourses.listCourse();
        res.json({ "Available courses": courses });
    };
}
export class EnrolToCourse {
    courseEnrol;
    constructor(courseEnrol) {
        this.courseEnrol = courseEnrol;
    }
    enrolCourse = async (req, res) => {
        const { courseId, email } = req.body;
        const enrolled = await this.courseEnrol.enrolToCourse(courseId, email);
        res.json(enrolled);
    };
}
//# sourceMappingURL=studentController.js.map