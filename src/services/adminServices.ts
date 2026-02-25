import type {
  adminRepoInterface,
  ListStudents,
} from "../interfaces/adminRepositoryInterface.js";

export class AdminServices {
  constructor(private adminRepo: adminRepoInterface) {}

  //create new course
  async create(courseName: string, description: string) {
    return this.adminRepo.createCourse({
      courseName,
      description,
    });
  }
}

export class StudentsListServices {
  constructor(private studentsList: ListStudents) {}

  async students() {
    return this.studentsList.listStudents();
  }
}
