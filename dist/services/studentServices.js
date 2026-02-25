export class StudentService {
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
}
//# sourceMappingURL=studentServices.js.map