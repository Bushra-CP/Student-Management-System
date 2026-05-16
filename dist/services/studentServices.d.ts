import type { StudentRepoInterface, courseEnrolRepoInterface, ListCourses } from "../interfaces/studentRepositoryInterface.js";
export declare class StudentRegisterService {
    private studentRepo;
    constructor(studentRepo: StudentRepoInterface);
    registerStudent(name: string, email: string): Promise<import("../interfaces/userInterface.js").User | null>;
    showProfile(email: string): Promise<import("../interfaces/userInterface.js").User | null>;
}
export declare class ListCoursesService {
    private courses;
    constructor(courses: ListCourses);
    listCourse(): Promise<import("../interfaces/courseInterface.js").Courses[] | null>;
}
export declare class CourseEnrolService {
    private enrol;
    constructor(enrol: courseEnrolRepoInterface);
    enrolToCourse(courseId: string, email: string): Promise<import("../interfaces/userInterface.js").User | null>;
}
//# sourceMappingURL=studentServices.d.ts.map