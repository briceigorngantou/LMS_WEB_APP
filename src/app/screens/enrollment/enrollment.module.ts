import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnrollmentService } from './enrollment.service';



@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [EnrollmentService],
})
export class EnrollmentModule { }
