import type { StudentRepoInterface, courseEnrolRepoInterface, ListCourses } from "../interfaces/studentRepositoryInterface.js";
export declare class StudentRegisterService {
    private studentRepo;
    constructor(studentRepo: StudentRepoInterface);
    registerStudent(name: string, email: string): Promise<any>;
    showProfile(email: string): Promise<any>;
}
export declare class ListCoursesService {
    private courses;
    constructor(courses: ListCourses);
    listCourse(): Promise<any>;
}
export declare class CourseEnrolService {
    private enrol;
    constructor(enrol: courseEnrolRepoInterface);
    enrolToCourse(courseId: string, email: string): Promise<any>;
}
//# sourceMappingURL=studentServices.d.ts.map