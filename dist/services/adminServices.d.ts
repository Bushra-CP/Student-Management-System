import type { adminRepoInterface, ListStudents } from "../interfaces/adminRepositoryInterface.js";
export declare class AdminServices {
    private adminRepo;
    constructor(adminRepo: adminRepoInterface);
    create(courseName: string, description: string): Promise<import("../interfaces/courseInterface.js").Courses | null>;
}
export declare class StudentsListServices {
    private studentsList;
    constructor(studentsList: ListStudents);
    students(): Promise<import("../interfaces/userInterface.js").User[] | null>;
}
//# sourceMappingURL=adminServices.d.ts.map