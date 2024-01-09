import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, SidebarComponent],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {

}
