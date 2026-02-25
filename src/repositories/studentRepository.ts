import type {
  StudentRepoInterface,
  courseEnrolRepoInterface,
} from "../interfaces/studentRepositoryInterface.js";
import {UserModel} from '../models/userModel.js';

export class StudentRepository implements StudentRepoInterface{
    async create(data: any){
        return UserModel.create(data);
    }

    async findByMail(email: string) {
        return UserModel.findOne({email});
    }
}


// async registerStudent(name: string, email: string) {
//   return this.userRepo.create({
//     name,
//     email,
//     role: Role.STUDENT
//   });
// }