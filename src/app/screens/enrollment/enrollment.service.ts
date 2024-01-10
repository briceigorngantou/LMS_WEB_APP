import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Progress } from '../../shared/progress';
import { ResponseBody } from '../../shared/responseBody';
import { EnrollmentDTO } from './enrollmentDto';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  enrollUriApi: string = 'http://localhost:8084';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  private log(response: any) {
    console.log(response.data);
  }

  private handleError(error: Error, errorValue: any) {
    console.log(error);
    return of(errorValue);
  }

  getStatus(courseId: number, userId: number): Observable<ResponseBody> {
    return this.http
      .get<ResponseBody>(
        `${this.enrollUriApi}/api/enroll/getStatus/${userId}/${courseId}`
      )
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }

  getEnrollById(enrollId: number): Observable<ResponseBody> {
    return this.http
      .get<ResponseBody>(`${this.enrollUriApi}/api/enroll/getById/${enrollId}`)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }

  listOfCourses(userId: number): Observable<ResponseBody> {
    return this.http
      .get<ResponseBody>(
        `${this.enrollUriApi}/api/enroll/listOfCourses/${userId}`
      )
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }

  listOfSubscribers(courseId: number): Observable<ResponseBody> {
    return this.http
      .get<ResponseBody>(
        `${this.enrollUriApi}/api/enroll/listOfSubscribers/${courseId}`
      )
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }

  listOfUnSubscribers(courseId: number): Observable<ResponseBody> {
    return this.http
      .get<ResponseBody>(
        `${this.enrollUriApi}/api/enroll/listOfUnSubscribers/${courseId}`
      )
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }

  updateStatusOfCourse(
    courseId: number,
    userId: number,
    status: Progress
  ): Observable<ResponseBody> {
    return this.http
      .put<ResponseBody>(
        `${this.enrollUriApi}/api/enroll/updateStatusOfCourse/${courseId}/${userId}/${status}`,
        this.httpOptions
      )
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, null))
      );
  }

  subscription(dto: EnrollmentDTO): Observable<ResponseBody> {
    return this.http
      .post<ResponseBody>(
        `${this.enrollUriApi}/api/enroll/subscribe`,
        dto,
        this.httpOptions
      )
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, null))
      );
  }

  unSubscription(dto: EnrollmentDTO): Observable<ResponseBody> {
    return this.http
      .post<ResponseBody>(
        `${this.enrollUriApi}/api/enroll/unSubscribe`,
        dto,
        this.httpOptions
      )
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, null))
      );
  }
}
