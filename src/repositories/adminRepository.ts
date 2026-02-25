import type {
  adminRepoInterface,
  ListStudents,
} from "../interfaces/adminRepositoryInterface.js";
import { UserModel } from "../models/userModel.js";
import { CourseModel } from "../models/courseModel.js";

export class AdminRepository implements adminRepoInterface {
  async createCourse(data: any) {
    return CourseModel.create(data);
  }
}

export class StudentsListRepository implements ListStudents {
  async listStudents() {
    return UserModel.find()
      .select("name email courses")
      .populate("courses", "title description");
  }
}
