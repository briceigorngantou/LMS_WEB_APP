export class Courses {
  id: number = 0;
  title: string = '';
  code: string = '';
  description: string = '';
  certification: string = '';
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
