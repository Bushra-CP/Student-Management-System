import type {
  StudentRepoInterface,
  courseEnrolRepoInterface,
  ListCourses,
} from "../interfaces/studentRepositoryInterface.js";
import { UserModel } from "../models/userModel.js";
import { CourseModel } from "../models/courseModel.js";

export class StudentRepository implements StudentRepoInterface {
  async create(data: any) {
    return UserModel.create(data);
  }

  async findByMail(email: string) {
    return UserModel.findOne({ email })
      .select("name email courses")
      .populate("courses", "title description");
  }
}

export class ListCoursesRepository implements ListCourses {
  async listCourse() {
    return CourseModel.find();
  }
}

export class CourseEnrolRepository implements courseEnrolRepoInterface {
  async enrolToCourse(courseId: string, email: string) {
    return UserModel.findOneAndUpdate(
      { email: email },
      { $addToSet: { courses: courseId } },
      { new: true },
    );
  }
}
