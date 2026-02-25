import type { StudentRepoInterface } from "../interfaces/studentRepositoryInterface.js";
export declare class StudentRepository implements StudentRepoInterface {
    create(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/userModel.js").UserInterface, {}, import("mongoose").DefaultSchemaOptions> & import("../models/userModel.js").UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findByMail(email: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/userModel.js").UserInterface, {}, import("mongoose").DefaultSchemaOptions> & import("../models/userModel.js").UserInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
//# sourceMappingURL=studentRepository.d.ts.map