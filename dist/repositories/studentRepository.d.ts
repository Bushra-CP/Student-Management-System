import type { StudentRepoInterface, courseEnrolRepoInterface, ListCourses } from "../interfaces/studentRepositoryInterface.js";
import type { User } from "../interfaces/userInterface.js";
export declare class StudentRepository implements StudentRepoInterface {
    create(data: User): Promise<import("mongoose").Document<unknown, {}, import("../models/userModel.js").UserInterface, {}, import("mongoose").DefaultSchemaOptions> & import("../models/userModel.js").UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findByMail(email: string): Promise<(import("../models/userModel.js").UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
export declare class ListCoursesRepository implements ListCourses {
    listCourse(): Promise<(import("../models/courseModel.js").CourseInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
}
export declare class CourseEnrolRepository implements courseEnrolRepoInterface {
    enrolToCourse(courseId: string, email: string): Promise<(import("../models/userModel.js").UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
//# sourceMappingURL=studentRepository.d.ts.map