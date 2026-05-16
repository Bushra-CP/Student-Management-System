import type {
  StudentRepoInterface,
  courseEnrolRepoInterface,
  ListCourses,
  LoginInterface,
  UserProfile,
} from "../../interfaces/studentInterfaces/studentRepositoryInterface.js";
import { UserModel } from "../../models/userModel.js";
import { CourseModel } from "../../models/courseModel.js";
import type { User } from "../../interfaces/studentInterfaces/userInterface.js";

export class StudentRepository implements StudentRepoInterface {
  async create(data: User) {
    return UserModel.create(data);
  }

  async findByMail(email: string): Promise<UserProfile | null> {
    return await UserModel.findOne({ email })
      .select("name email courses -_id")
      .populate("courses", "courseName description -_id")
      .lean<UserProfile>();
  }
}

export class LoginRepository implements LoginInterface {
  async login(email: string) {
    return await UserModel.findOne({ email });
  }
}

export class ListCoursesRepository implements ListCourses {
  async listCourse() {
    return CourseModel.find().select("courseName description").lean();
  }
}

export class CourseEnrolRepository implements courseEnrolRepoInterface {
  async enrolToCourse(courseId: string, email: string) {
    return UserModel.findOneAndUpdate(
      { email: email },
      { $addToSet: { courses: courseId } },
      { new: true },
    )
      .select("name email courses -_id")
      .populate("courses", "courseName description -_id")
      .lean();
  }
}
