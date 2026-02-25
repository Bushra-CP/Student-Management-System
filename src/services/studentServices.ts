import type {
  StudentRepoInterface,
  courseEnrolRepoInterface,
} from "../interfaces/studentRepositoryInterface.js";

export class StudentService {
  constructor(private studentRepo: StudentRepoInterface) {}

  // Student Registration
  async registerStudent(name: string, email: string) {
    return this.studentRepo.create({
      name,
      email,
    });
  }
}
