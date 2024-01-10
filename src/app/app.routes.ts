import { Routes } from '@angular/router';
import { AuthGuard } from './screens/auth/auth.guard';
import { AddCoursesComponent } from './screens/courses/add-courses/add-courses.component';
import { CoursesComponent } from './screens/courses/courses.component';
import { DetailCourseComponent } from './screens/courses/detail-course/detail-course.component';
import { MyCoursesComponent } from './screens/courses/my-courses/my-courses.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import RegisterComponent from './screens/register/register.component';
import { ProfileComponent } from './screens/users/profile/profile.component';
import { TeachersComponent } from './screens/users/teachers/teachers.component';
import { UsersComponent } from './screens/users/users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
  {
    path: 'detail-course',
    component: DetailCourseComponent,
    canActivate: [AuthGuard],
  },
  { path: 'mycourse', component: MyCoursesComponent, canActivate: [AuthGuard] },
  {
    path: 'addcourse',
    component: AddCoursesComponent,
    canActivate: [AuthGuard],
  },
  { path: 'teachers', component: TeachersComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
];
