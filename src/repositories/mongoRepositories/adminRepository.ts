import type {
  AdminRepoInterface,
  ListStudents,
  LoginInterface,
} from "../../interfaces/adminInterfaces/adminRepositoryInterface.js";
import { UserModel } from "../../models/userModel.js";
import { CourseModel } from "../../models/courseModel.js";
import type { Courses } from "../../interfaces/adminInterfaces/courseInterface.js";


export class LoginRepository implements LoginInterface {
  async login(email: string) {
    return await UserModel.findOne({ email });
  }
}

export class AdminRepository implements AdminRepoInterface {
  async createCourse(data: Courses) {
    return await CourseModel.create(data);
  }
}

export class StudentsListRepository implements ListStudents {
  async listStudents() {
    return await UserModel.find({ role: "Student" })
      .select("name email courses -_id")
      .populate("courses", "courseName description -_id")
      .lean();
  }
}
