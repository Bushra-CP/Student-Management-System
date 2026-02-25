export class StudentRegisterService {
    studentRepo;
    constructor(studentRepo) {
        this.studentRepo = studentRepo;
    }
    // Student Registration
    async registerStudent(name, email) {
        return this.studentRepo.create({
            name,
            email,
        });
    }
    async showProfile(email) {
        return this.studentRepo.findByMail(email);
    }
}
export class ListCoursesService {
    courses;
    constructor(courses) {
        this.courses = courses;
    }
    async listCourse() {
        return this.courses.listCourse();
    }
}
export class CourseEnrolService {
    enrol;
    constructor(enrol) {
        this.enrol = enrol;
    }
    async enrolToCourse(courseId, email) {
        return this.enrol.enrolToCourse(courseId, email);
    }
}
//# sourceMappingURL=studentServices.js.map