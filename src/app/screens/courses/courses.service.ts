import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { ResponseBody } from '../../shared/responseBody';
import { Courses } from './courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courseUriApi: string = 'http://localhost:8080';
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

  getAllCourses(): Observable<ResponseBody> {
    return this.http.get<ResponseBody>(`${this.courseUriApi}/api/courses`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getCourseById(courseId: number): Observable<ResponseBody> {
    return this.http
      .get<ResponseBody>(`${this.courseUriApi}/api/courses/getById/${courseId}`)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }

  getCourseByTitle(title: string): Observable<ResponseBody> {
    return this.http
      .get<ResponseBody>(`${this.courseUriApi}/api/courses/getByTitle/${title}`)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }

  getCourseByCode(code: string): Observable<ResponseBody> {
    return this.http
      .get<ResponseBody>(`${this.courseUriApi}/api/courses/getByCode/${code}`)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }

  searchCourse(keyword: string): Observable<ResponseBody> {
    return this.http
      .get<ResponseBody>(`${this.courseUriApi}/api/courses/search/${keyword}`)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }

  updateCourse(course: Courses, courseId: number): Observable<ResponseBody> {
    return this.http
      .put<ResponseBody>(
        `${this.courseUriApi}/api/courses/update/${courseId}`,
        course,
        this.httpOptions
      )
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, null))
      );
  }

  addCourse(course: Courses): Observable<ResponseBody> {
    return this.http
      .post<ResponseBody>(
        `${this.courseUriApi}/api/courses/add`,
        course,
        this.httpOptions
      )
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, null))
      );
  }

  deleteCourseById(courseId: number): Observable<ResponseBody> {
    return this.http
      .delete<ResponseBody>(
        `${this.courseUriApi}/api/courses/delete/${courseId}`
      )
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, null))
      );
  }
}
