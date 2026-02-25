import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true, default: "Student" },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});
export const UserModel = mongoose.model("User", userSchema);
//# sourceMappingURL=userModel.js.map