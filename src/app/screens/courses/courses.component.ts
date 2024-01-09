import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, SidebarComponent],
  templateUrl: './courses.component.html',
})
export class CoursesComponent {

}
