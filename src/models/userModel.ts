import mongoose, { Schema } from "mongoose";

export interface UserInterface {
  name: string;
  email: string;
  role: string;
  courses: mongoose.Types.ObjectId[];
}

const userSchema = new Schema<UserInterface>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true, default: "Student" },
  courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});

export const UserModel = mongoose.model<UserInterface>("User", userSchema);
