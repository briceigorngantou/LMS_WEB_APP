import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { Progress } from '../../../shared/progress';
import { EnrollmentService } from '../../enrollment/enrollment.service';
import { EnrollmentDTO } from '../../enrollment/enrollmentDto';
import { Courses } from '../courses';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-detail-course',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './detail-course.component.html',
})
export class DetailCourseComponent {
  courseList: Courses[] = [];
  userId: number = 0;
  courseId: number = 0;
  unsubscritbe: boolean = false;
  constructor(
    private router: Router,
    private courseService: CoursesService,
    private enrollService: EnrollmentService
  ) {}

  ngOnInit() {
    this.courseService
      .getAllCourses()
      .subscribe((value) => (this.courseList = value.data));
  }

  EnrolledCourse() {}

  unSubscription() {
    const dto = new EnrollmentDTO(this.userId, this.courseId);
    this.enrollService.unSubscription(dto).subscribe((value) => {
      if (value.data) {
        this.unsubscritbe = true;
      } else {
        this.unsubscritbe = false;
      }
    });
  }

  NotStartedCourse() {
    this.enrollService
      .updateStatusOfCourse(this.courseId, this.userId, Progress.NOT_STARTED)
      .subscribe();
  }

  InProgressCourse() {
    this.enrollService
      .updateStatusOfCourse(this.courseId, this.userId, Progress.IN_PROGRESS)
      .subscribe();
  }

  CompletedCourse() {
    const dto = new EnrollmentDTO(this.userId, this.courseId);
    this.enrollService
      .updateStatusOfCourse(this.courseId, this.userId, Progress.COMPLETED)
      .subscribe();
  }

  gotoCourseDetails(course: Courses) {
    this.router.navigate(['/detail-course', course.id]);
  }
}
