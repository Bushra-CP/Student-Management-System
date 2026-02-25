import type { StudentRepoInterface } from "../interfaces/studentRepositoryInterface.js";
export declare class StudentService {
    private studentRepo;
    constructor(studentRepo: StudentRepoInterface);
    registerStudent(name: string, email: string): Promise<any>;
}
//# sourceMappingURL=studentServices.d.ts.map