import mongoose, { Schema } from "mongoose";
const courseSchema = new Schema({
    courseName: { type: String, required: true },
    description: { type: String },
});
export const CourseModel = mongoose.model("Course", courseSchema);
//# sourceMappingURL=courseModel.js.map