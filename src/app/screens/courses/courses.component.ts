import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { Courses } from './courses';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
  courseList: Courses[] = [];

  constructor(private router: Router, private courseService: CoursesService) {}

  ngOnInit() {
    this.courseService
      .getAllCourses()
      .subscribe((value) => (this.courseList = value.data));
  }

  gotoCourseDetails(course: Courses) {
    console.log('coursesssss:', course);
    this.router.navigate(['/detail-course', course.id]);
  }
}
