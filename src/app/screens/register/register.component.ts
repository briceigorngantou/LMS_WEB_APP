import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, SidebarComponent],
  templateUrl: './register.component.html',
})
export class RegisterComponent {}
