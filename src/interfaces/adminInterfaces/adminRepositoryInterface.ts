import type { Courses } from "../adminInterfaces/courseInterface.js";
import type { User } from "../studentInterfaces/userInterface.js";

export interface UserType {
  name: string;
  email: string;
}

export interface LoginInterface {
  login(email: string): Promise<User | null>;
}

export interface AdminRepoInterface {
  createCourse(data: Courses): Promise<Courses | null>;
}

export interface ListStudents {
  listStudents(): Promise<UserType[] | null>;
}
