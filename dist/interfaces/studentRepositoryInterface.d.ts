import type { User } from './userInterface.js';
export interface StudentRepoInterface {
    create(data: User): Promise<any>;
    findByMail(data: string): Promise<any>;
}
export interface courseEnrolRepoInterface {
    enrolToCourse(data: string): Promise<void>;
}
//# sourceMappingURL=studentRepositoryInterface.d.ts.map