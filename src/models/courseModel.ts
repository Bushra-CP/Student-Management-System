import mongoose, { Schema } from "mongoose";

export interface CourseInterface {
  title: string;
  description: string;
}

const courseSchema = new Schema<CourseInterface>({
  title: { type: String, required: true },
  description: { type: String },
});

export const CourseModel = mongoose.model<CourseInterface>(
  "Course",
  courseSchema,
);
