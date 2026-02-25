import type { User } from "./userInterface.js";
export interface StudentRepoInterface {
    create(data: User): Promise<any>;
    findByMail(data: string): Promise<any>;
}
export interface ListCourses {
    listCourse(): Promise<any>;
}
export interface courseEnrolRepoInterface {
    enrolToCourse(data1: string, data2: string): Promise<any>;
}
//# sourceMappingURL=studentRepositoryInterface.d.ts.map