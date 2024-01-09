import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, SidebarComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['register']);
  }
}
