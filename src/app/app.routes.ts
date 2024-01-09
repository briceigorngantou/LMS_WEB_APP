import { Routes } from '@angular/router';
import { CoursesComponent } from './screens/courses/courses.component';
import { DetailCourseComponent } from './screens/detail-course/detail-course.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { RegisterComponent } from './screens/register/register.component';
import { TeachersComponent } from './screens/teachers/teachers.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'detail-course', component: DetailCourseComponent },
  { path: 'teachers', component: TeachersComponent },
];
