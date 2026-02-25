export class AdminServices {
    adminRepo;
    constructor(adminRepo) {
        this.adminRepo = adminRepo;
    }
    //create new course
    async create(courseName, description) {
        return this.adminRepo.createCourse({
            courseName,
            description,
        });
    }
}
export class StudentsListServices {
    studentsList;
    constructor(studentsList) {
        this.studentsList = studentsList;
    }
    async students() {
        return this.studentsList.listStudents();
    }
}
//# sourceMappingURL=adminServices.js.map