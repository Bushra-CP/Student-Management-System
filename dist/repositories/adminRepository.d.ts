import type { adminRepoInterface, ListStudents } from "../interfaces/adminRepositoryInterface.js";
export declare class AdminRepository implements adminRepoInterface {
    createCourse(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/courseModel.js").CourseInterface, {}, import("mongoose").DefaultSchemaOptions> & import("../models/courseModel.js").CourseInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
}
export declare class StudentsListRepository implements ListStudents {
    listStudents(): Promise<(import("mongoose").Document<unknown, {}, import("../models/userModel.js").UserInterface, {}, import("mongoose").DefaultSchemaOptions> & import("../models/userModel.js").UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
}
//# sourceMappingURL=adminRepository.d.ts.map