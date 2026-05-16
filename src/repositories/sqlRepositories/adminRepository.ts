import prismaDB from "../../config/prismaDb.js";
import type {
  AdminRepoInterface,
  ListStudents,
  LoginInterface,
  UserType,
} from "../../interfaces/adminInterfaces/adminRepositoryInterface.js";
import type { Courses } from "../../interfaces/adminInterfaces/courseInterface.js";

// LOGIN REPOSITORY
export class SqlLoginRepository implements LoginInterface {
  async login(email: string) {
    return await prismaDB.user.findUnique({
      where: { email },
    });
  }
}

// ADMIN REPOSITORY
export class SqlAdminRepository implements AdminRepoInterface {
  async createCourse(data: Courses) {
    if (!data.mongoId) {
      throw new Error("mongoId not found");
    }

    return await prismaDB.course.create({
      data: {
        mongoId: data.mongoId,
        courseName: data.courseName,
        description: data.description,
      },
    });
  }
}

// STUDENT LIST REPOSITORY
export class SqlStudentsListRepository implements ListStudents {
  async listStudents() {
    return await prismaDB.user.findMany({
      where: {
        role: "Student",
      },
      select: {
        name: true,
        email: true,
        courses: {
          select: {
            courseName: true,
            description: true,
          },
        },
      },
    });
  }
}
