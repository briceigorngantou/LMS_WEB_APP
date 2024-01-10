import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { Users } from '../users/users';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  templateUrl: './register.component.html',
})
export default class RegisterComponent implements OnInit {
  user: Users = new Users();

  constructor(private userService: UsersService, private router: Router) {}
  ngOnInit() {}

  onSubmitForm() {
    this.userService.addUser(this.user).subscribe((value) => {
      console.log(value);
      if (value?.data != null) {
        this.user = value.data;
        this.router.navigate(['/login']);
      } else {
        console.log('register');
        this.router.navigate(['/register']);
      }
    });
  }
}
