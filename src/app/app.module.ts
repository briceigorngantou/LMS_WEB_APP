import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesModule } from './screens/courses/courses.module';
import { DetailCourseComponent } from './screens/courses/detail-course/detail-course.component';
import { EnrollmentModule } from './screens/enrollment/enrollment.module';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import RegisterComponent from './screens/register/register.component';
import { ProfileComponent } from './screens/users/profile/profile.component';
import { TeachersComponent } from './screens/users/teachers/teachers.component';
import { UsersModule } from './screens/users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DetailCourseComponent,
    PageNotFoundComponent,
    ProfileComponent,
    TeachersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoursesModule,
    UsersModule,
    EnrollmentModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
