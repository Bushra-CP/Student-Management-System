import type { adminRepoInterface, ListStudents } from "../interfaces/adminRepositoryInterface.js";
export declare class AdminServices {
    private adminRepo;
    constructor(adminRepo: adminRepoInterface);
    create(courseName: string, description: string): Promise<any>;
}
export declare class StudentsListServices {
    private studentsList;
    constructor(studentsList: ListStudents);
    students(): Promise<any>;
}
//# sourceMappingURL=adminServices.d.ts.map