import prismaDB from "../../config/prismaDb.js";
import type { Courses } from "../../interfaces/adminInterfaces/courseInterface.js";
import type {
  courseEnrolRepoInterface,
  ListCourses,
  LoginInterface,
  StudentRepoInterface,
} from "../../interfaces/studentInterfaces/studentRepositoryInterface.js";
import type { User } from "../../interfaces/studentInterfaces/userInterface.js";

// STUDENT REGISTER REPOSITORY
export class SqlStudentRepository implements StudentRepoInterface {
  async create(data: User) {
    return await prismaDB.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
  }

  async findByMail(email: string) {
    return await prismaDB.user.findUnique({
      where: { email },

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

// LOGIN REPOSITORY
export class SqlLoginRepository implements LoginInterface {
  async login(email: string) {
    return await prismaDB.user.findUnique({
      where: { email },
    });
  }
}

// LIST COURSES REPOSITORY
export class SqlListCoursesRepository implements ListCourses {
  async listCourse() {
    return await prismaDB.course.findMany({
      select: {
        courseName: true,
        description: true,
      },
    });
  }
}

// COURSE ENROL REPOSITORY
export class SqlCourseEnrolRepository implements courseEnrolRepoInterface {
  async enrolToCourse(courseId: string, email: string) {
    const user = await prismaDB.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return await prismaDB.user.update({
      where: {
        id: user.id,
      },

      data: {
        courses: {
          connect: {
            mongoId: courseId,
          },
        },
      },
    });
  }
}
