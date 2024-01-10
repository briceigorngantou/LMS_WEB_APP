import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { Enrollment } from '../../enrollment/enrollment';
import { EnrollmentService } from '../../enrollment/enrollment.service';
import { Courses } from '../courses';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './my-courses.component.html',
})
export class MyCoursesComponent {
  myCourseList: Courses[] = [];
  subscriptionsList: Enrollment[] = [];
  userId: number = 1;

  constructor(
    private router: Router,
    private courseService: CoursesService,
    private enrollService: EnrollmentService
  ) {}

  ngOnInit() {
    this.enrollService
      .listOfCourses(this.userId)
      .subscribe((value) => (this.subscriptionsList = value.data));

    this.getAllCoursesOfUser();
  }

  getAllCoursesOfUser() {
    this.subscriptionsList.map((item, key) => {
      this.courseService
        .getCourseById(item.courseId)
        .subscribe((value) => this.myCourseList.push(value.data));
    });
  }

  gotoCourseDetails(course: Courses) {
    this.router.navigate(['/detail-course', course.id]);
  }
}
