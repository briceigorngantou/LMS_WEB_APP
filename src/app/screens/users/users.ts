import { Role } from "../../shared/role";

export class Users {
  id: number;
  username: string;
  password: string;
  fullName: string;
  email: string;
  age: number;
  role: Role;
  createdAt: Date;

  constructor(
    id: 0,
    username: string,
    password: string,
    fullName: string,
    age: number,
    email: string,
    role: Role,
    createdAt: Date = new Date()
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.fullName = fullName;
    this.age = age;
    this.email = email;
    this.role = role;
    this.createdAt = createdAt;
  }
}
