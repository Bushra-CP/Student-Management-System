import { UserModel } from "../models/userModel.js";
import { CourseModel } from "../models/courseModel.js";
export class StudentRepository {
    async create(data) {
        return UserModel.create(data);
    }
    async findByMail(email) {
        return UserModel.findOne({ email })
            .select("name email courses -_id")
            .populate("courses", "courseName description -_id")
            .lean();
    }
}
export class ListCoursesRepository {
    async listCourse() {
        return CourseModel.find().select("courseName description").lean();
    }
}
export class CourseEnrolRepository {
    async enrolToCourse(courseId, email) {
        return UserModel.findOneAndUpdate({ email: email }, { $addToSet: { courses: courseId } }, { new: true })
            .select("name email courses -_id")
            .populate("courses", "courseName description -_id")
            .lean();
    }
}
//# sourceMappingURL=studentRepository.js.map