import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { Courses } from '../courses';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-add-courses',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  templateUrl: './add-courses.component.html',
})
export class AddCoursesComponent {
  course: Courses = new Courses();
  constructor(private router: Router, private courseService: CoursesService) {}

  ngOnInit() {}

  onSubmitCourse() {
    this.courseService.addCourse(this.course).subscribe((value) => {
      if (value?.data != null) {
        this.course = value.data;
        this.router.navigate(['/courses']);
      } else {
        this.router.navigate(['/addcourse']);
      }
    });
  }
}
