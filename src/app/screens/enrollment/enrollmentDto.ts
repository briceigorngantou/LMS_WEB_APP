export class EnrollmentDTO {
  userId: number;
  courseId: number;

  constructor(userId: number, courseId: number) {
    this.userId = userId;
    this.courseId = courseId;
  }
}
