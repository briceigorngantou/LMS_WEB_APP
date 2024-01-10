import { Role } from '../../shared/role';

export class Users {
  id: number = 0;
  username: string = '';
  password: string = '';
  fullName: string = '';
  email: string = '';
  age: number = 0;
  role: Role = Role.STUDENT;
  createdAt: Date = new Date();

  constructor() {
    this.createdAt = new Date();
  }
}
