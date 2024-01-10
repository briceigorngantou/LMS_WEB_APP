import { Progress } from '../../shared/progress';

export class Enrollment {
  id: number;
  status: Progress;
  userId: number;
  courseId: number;
  subscribe: boolean;
  createdAt: Date;

  constructor(
    id: 0,
    status: Progress,
    userId: number,
    courseId: number,
    subscribe: boolean,
    createdAt: Date = new Date()
  ) {
    this.id = id;
    this.status = status;
    this.userId = userId;
    this.courseId = courseId;
    this.subscribe = subscribe;
    this.createdAt = createdAt;
  }
}
