import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type {
  AdminRepoInterface,
  ListStudents,
  LoginInterface,
} from "../interfaces/adminInterfaces/adminRepositoryInterface.js";

export class LoginSerrvice {
  constructor(
    private loginRepo: LoginInterface,
    private sqlLoginRepo: LoginInterface,
  ) {}

  async login(email: string, password: string) {
    //mongo code
    const user = await this.loginRepo.login(email);

    //sql code
    await this.sqlLoginRepo.login(email);

    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign(
      {
        id: user._id,
        email:user.email,
        role: user.role,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1d",
      },
    );

    return { token, user };
  }
}

export class AdminServices {
  constructor(
    private adminRepo: AdminRepoInterface,
    private sqlAdminRepo: AdminRepoInterface,
  ) {}

  //create new course

  async create(courseName: string, description: string) {
    const course = await this.adminRepo.createCourse({
      courseName,
      description,
    });

    if (!course) {
      throw new Error("Course creation failed");
    }

    const mongoId = course._id!.toString();

    // sql code
    await this.sqlAdminRepo.createCourse({
      mongoId,
      courseName,
      description,
    });

    // mongo code
    return course;
  }
}

export class StudentsListServices {
  constructor(
    private studentsList: ListStudents,
    private sqlStudentsList: ListStudents,
  ) {}

  async students() {
    //sql code
    await this.sqlStudentsList.listStudents();

    //mongo code
    return await this.studentsList.listStudents();
  }
}
