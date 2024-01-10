import { Routes } from '@angular/router';
import { AddCoursesComponent } from './screens/courses/add-courses/add-courses.component';
import { CoursesComponent } from './screens/courses/courses.component';
import { DetailCourseComponent } from './screens/courses/detail-course/detail-course.component';
import { MyCoursesComponent } from './screens/courses/my-courses/my-courses.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import { RegisterComponent } from './screens/register/register.component';
import { ProfileComponent } from './screens/users/profile/profile.component';
import { TeachersComponent } from './screens/users/teachers/teachers.component';
import { UsersComponent } from './screens/users/users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'detail-course', component: DetailCourseComponent },
  { path: 'mycourse', component: MyCoursesComponent },
  { path: 'addcourse', component: AddCoursesComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', component: PageNotFoundComponent }
];
