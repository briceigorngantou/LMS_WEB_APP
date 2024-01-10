import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './teachers.component.html',
})
export class TeachersComponent {
  teachersList: Users[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService
      .getAllTeachers()
      .subscribe((value) => (this.teachersList = value.data));
  }
}
