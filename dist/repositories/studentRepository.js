import { UserModel } from "../models/userModel.js";
import { CourseModel } from "../models/courseModel.js";
export class StudentRepository {
    async create(data) {
        return UserModel.create(data);
    }
    async findByMail(email) {
        return UserModel.findOne({ email })
            .select("name email courses")
            .populate("courses", "title description");
    }
}
export class ListCoursesRepository {
    async listCourse() {
        return CourseModel.find();
    }
}
export class CourseEnrolRepository {
    async enrolToCourse(courseId, email) {
        return UserModel.findOneAndUpdate({ email: email }, { $addToSet: { courses: courseId } }, { new: true });
    }
}
//# sourceMappingURL=studentRepository.js.map