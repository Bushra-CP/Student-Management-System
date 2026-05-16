import type { Courses } from "./courseInterface.js";
import type { User } from "./userInterface.js";
export interface adminRepoInterface {
    createCourse(data: Courses): Promise<Courses | null>;
}
export interface ListStudents {
    listStudents(): Promise<User[] | null>;
}
//# sourceMappingURL=adminRepositoryInterface.d.ts.map