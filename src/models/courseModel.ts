import mongoose, { Schema } from "mongoose";

export interface CourseInterface {
  courseName: string;
  description: string;
}

const courseSchema = new Schema<CourseInterface>({
  courseName: { type: String, required: true },
  description: { type: String },
});

export const CourseModel = mongoose.model<CourseInterface>(
  "Course",
  courseSchema,
);
