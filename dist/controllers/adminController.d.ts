import type { Request, Response } from "express";
import { AdminServices, StudentsListServices } from "../services/adminServices.js";
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminServices);
    createCourse: (req: Request, res: Response) => Promise<void>;
}
export declare class ListStudents {
    private listStudents;
    constructor(listStudents: StudentsListServices);
    studentsList: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=adminController.d.ts.map