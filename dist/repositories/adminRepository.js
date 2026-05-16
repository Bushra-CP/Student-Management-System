import { UserModel } from "../models/userModel.js";
import { CourseModel } from "../models/courseModel.js";
export class AdminRepository {
    async createCourse(data) {
        return CourseModel.create(data);
    }
}
export class StudentsListRepository {
    async listStudents() {
        return UserModel.find()
            .select("name email courses -_id")
            .populate("courses", "courseName description -_id")
            .lean();
    }
}
//# sourceMappingURL=adminRepository.js.map