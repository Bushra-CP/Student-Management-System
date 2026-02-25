import mongoose from "mongoose";
export interface CourseInterface {
    courseName: string;
    description: string;
}
export declare const CourseModel: mongoose.Model<CourseInterface, {}, {}, {}, mongoose.Document<unknown, {}, CourseInterface, {}, mongoose.DefaultSchemaOptions> & CourseInterface & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, CourseInterface>;
//# sourceMappingURL=courseModel.d.ts.map