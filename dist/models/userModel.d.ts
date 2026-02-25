import mongoose from "mongoose";
export interface UserInterface {
    name: string;
    email: string;
    role: string;
    courses: mongoose.Types.ObjectId[];
}
export declare const UserModel: mongoose.Model<UserInterface, {}, {}, {}, mongoose.Document<unknown, {}, UserInterface, {}, mongoose.DefaultSchemaOptions> & UserInterface & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, UserInterface>;
//# sourceMappingURL=userModel.d.ts.map