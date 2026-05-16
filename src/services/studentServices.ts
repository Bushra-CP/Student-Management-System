import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type {
  StudentRepoInterface,
  courseEnrolRepoInterface,
  ListCourses,
  LoginInterface,
} from "../interfaces/studentInterfaces/studentRepositoryInterface.js";

//TO REGISTER AND SHOW PROFILE OF A USER
export class StudentRegisterService {
  constructor(
    private studentRepo: StudentRepoInterface,
    private sqlStudentRepo: StudentRepoInterface,
  ) {}

  // Student Registration
  async registerStudent(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);

    //sql code
    await this.sqlStudentRepo.create({
      name,
      email,
      password: hashedPassword,
    });

    //mongo code
    return this.studentRepo.create({
      name,
      email,
      password: hashedPassword,
    });
  }

  async showProfile(email: string) {
    const res = this.sqlStudentRepo.findByMail(email);
    // console.log(res);

    return this.studentRepo.findByMail(email);
  }
}

//LOGIN
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

//TO LIST ALL COURSES
export class ListCoursesService {
  constructor(
    private courses: ListCourses,
    private sqlCourses: ListCourses,
  ) {}

  async listCourse() {
    //sql code
    await this.sqlCourses.listCourse();

    //mongo code
    return this.courses.listCourse();
  }
}

//TO ENROL TO A COURSE
export class CourseEnrolService {
  constructor(
    private enrol: courseEnrolRepoInterface,
    private sqlEnrol: courseEnrolRepoInterface,
  ) {}

  async enrolToCourse(courseId: string, email: string) {
    //sql code
    await this.sqlEnrol.enrolToCourse(courseId, email);

    //mongo code
    return this.enrol.enrolToCourse(courseId, email);
  }
}
