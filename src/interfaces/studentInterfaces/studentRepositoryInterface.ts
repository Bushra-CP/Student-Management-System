import type { User } from "./userInterface.js";
import type { Courses } from "../adminInterfaces/courseInterface.js";

export interface UserProfile {
  name: string;
  email: string;

  courses?: {
    courseName: string;
    description: string | null;
  }[];
}

export interface StudentRepoInterface {
  create(data: User): Promise<User | null>;
  findByMail(data: string): Promise<UserProfile | null>;
}

export interface LoginInterface {
  login(email: string): Promise<User | null>;
}

export interface ListCourses {
  listCourse(): Promise<Courses[] | null>;
}

export interface courseEnrolRepoInterface {
  enrolToCourse(data1: string, data2: string): Promise<User | null>;
}
