import { StudentRegisterService, ListCoursesService, CourseEnrolService } from "../services/studentServices.js";
export declare class RegisterStudent {
    private studentRegisterService;
    constructor(studentRegisterService: StudentRegisterService);
    registerStudent: (req: any, res: any) => Promise<void>;
    getProfile: (req: any, res: any) => Promise<void>;
}
export declare class ListCourses {
    private listCourses;
    constructor(listCourses: ListCoursesService);
    courseList: (req: any, res: any) => Promise<void>;
}
export declare class EnrolToCourse {
    private courseEnrol;
    constructor(courseEnrol: CourseEnrolService);
    enrolCourse: (req: any, res: any) => Promise<void>;
}
//# sourceMappingURL=studentController.d.ts.map