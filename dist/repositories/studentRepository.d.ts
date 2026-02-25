import type { StudentRepoInterface, courseEnrolRepoInterface, ListCourses } from "../interfaces/studentRepositoryInterface.js";
export declare class StudentRepository implements StudentRepoInterface {
    create(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/userModel.js").UserInterface, {}, import("mongoose").DefaultSchemaOptions> & import("../models/userModel.js").UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findByMail(email: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/userModel.js").UserInterface, {}, import("mongoose").DefaultSchemaOptions> & import("../models/userModel.js").UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
export declare class ListCoursesRepository implements ListCourses {
    listCourse(): Promise<(import("mongoose").Document<unknown, {}, import("../models/courseModel.js").CourseInterface, {}, import("mongoose").DefaultSchemaOptions> & import("../models/courseModel.js").CourseInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
}
export declare class CourseEnrolRepository implements courseEnrolRepoInterface {
    enrolToCourse(courseId: string, email: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/userModel.js").UserInterface, {}, import("mongoose").DefaultSchemaOptions> & import("../models/userModel.js").UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
//# sourceMappingURL=studentRepository.d.ts.map