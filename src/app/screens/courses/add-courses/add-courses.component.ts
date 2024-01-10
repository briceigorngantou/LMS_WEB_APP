import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
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
  ],
  templateUrl: './add-courses.component.html',
})
export class AddCoursesComponent {
  constructor(private router: Router, private courseService: CoursesService) {}
}
