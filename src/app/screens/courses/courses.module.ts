import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [CoursesService],
})
export class CoursesModule {}
