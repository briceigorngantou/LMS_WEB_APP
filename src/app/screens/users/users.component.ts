import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { EnrollmentService } from '../enrollment/enrollment.service';
import { Users } from './users';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  usersList: Users[] = [];
  totalMyClasses: number = 0;
  totalCertificateDelivered: number = 0;
  userId: number = 1;

  constructor(
    private router: Router,
    private userService: UsersService,
    private enrollService: EnrollmentService
  ) {}

  ngOnInit() {
    this.userService
      .getAllUsers()
      .subscribe((value) => (this.usersList = value.data));

    this.enrollService
      .listOfCourses(this.userId)
      .subscribe(
        (value) =>
          value.data != null && (this.totalMyClasses = value.data?.length)
      );
  }

  gotoUserProfile(user: Users) {
    this.router.navigate(['/profile', user.id]);
  }
}
