import { AdminServices, StudentsListServices } from "../services/adminServices.js";
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminServices);
    createCourse: (req: any, res: any) => Promise<void>;
}
export declare class ListStudents {
    private listStudents;
    constructor(listStudents: StudentsListServices);
    studentsList: (req: any, res: any) => Promise<void>;
}
//# sourceMappingURL=adminController.d.ts.map