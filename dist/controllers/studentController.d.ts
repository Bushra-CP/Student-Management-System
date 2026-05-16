import type { Request, Response } from "express";
import { StudentRegisterService, ListCoursesService, CourseEnrolService } from "../services/studentServices.js";
export declare class RegisterStudent {
    private studentRegisterService;
    constructor(studentRegisterService: StudentRegisterService);
    registerStudent: (req: Request, res: Response) => Promise<void>;
    getProfile: (req: Request, res: Response) => Promise<void>;
}
export declare class ListCourses {
    private listCourses;
    constructor(listCourses: ListCoursesService);
    courseList: (req: Request, res: Response) => Promise<void>;
}
export declare class EnrolToCourse {
    private courseEnrol;
    constructor(courseEnrol: CourseEnrolService);
    enrolCourse: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=studentController.d.ts.map