import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CoursesService } from '../courses/courses.service';
import { EnrollmentService } from '../enrollment/enrollment.service';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  totalCourses: number = 0;
  totalMyClasses: number = 0;
  totalCertificateDelivered: number = 0;
  totalTeachers: number = 0;
  totalUsers: number = 0;
  userId: number = 1;
  constructor(
    private courseService: CoursesService,
    private userService: UsersService,
    private enrollService: EnrollmentService
  ) {}

  ngOnInit() {
    this.courseService
      .getAllCourses()
      .subscribe(
        (value) =>
          value.data != null && (this.totalCourses = value.data?.length)
      );

    this.userService
      .getAllUsers()
      .subscribe(
        (value) => value.data != null && (this.totalUsers = value.data?.length)
      );

    this.userService
      .getAllTeachers()
      .subscribe(
        (value) =>
          value.data != null && (this.totalTeachers = value.data?.length)
      );

    this.enrollService
      .listOfCourses(this.userId)
      .subscribe(
        (value) =>
          value.data != null && (this.totalMyClasses = value.data?.length)
      );
  }
}
