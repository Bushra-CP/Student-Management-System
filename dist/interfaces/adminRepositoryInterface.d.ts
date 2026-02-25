import type { Courses } from "./courseInterface.js";
export interface adminRepoInterface {
    createCourse(data: Courses): Promise<any>;
}
export interface ListStudents {
    listStudents(): Promise<any>;
}
//# sourceMappingURL=adminRepositoryInterface.d.ts.map