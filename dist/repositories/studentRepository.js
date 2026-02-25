import { UserModel } from '../models/userModel.js';
export class StudentRepository {
    async create(data) {
        return UserModel.create(data);
    }
    async findByMail(email) {
        return UserModel.findOne({ email });
    }
}
// async registerStudent(name: string, email: string) {
//   return this.userRepo.create({
//     name,
//     email,
//     role: Role.STUDENT
//   });
// }
//# sourceMappingURL=studentRepository.js.map