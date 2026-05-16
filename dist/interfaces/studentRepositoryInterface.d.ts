import type { User } from "./userInterface.js";
import type { Courses } from "./courseInterface.js";
export interface StudentRepoInterface {
    create(data: User): Promise<User | null>;
    findByMail(data: string): Promise<User | null>;
}
export interface ListCourses {
    listCourse(): Promise<Courses[] | null>;
}
export interface courseEnrolRepoInterface {
    enrolToCourse(data1: string, data2: string): Promise<User | null>;
}
//# sourceMappingURL=studentRepositoryInterface.d.ts.map