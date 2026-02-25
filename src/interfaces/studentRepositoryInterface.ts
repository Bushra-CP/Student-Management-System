import type {User} from './userInterface.js';
import type {Courses} from './courseInterface.js';

export interface StudentRepoInterface {
  create(data: User): Promise<any>;
  findByMail(data: string): Promise<any>;
}

export interface courseEnrolRepoInterface {
  enrolToCourse(data: Courses): Promise<void>;
}
