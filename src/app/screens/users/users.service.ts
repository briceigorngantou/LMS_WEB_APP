import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { ResponseBody } from '../../shared/responseBody';
import { Role } from '../../shared/role';
import { Users } from './users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userUriApi: string = 'http://localhost:8086';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  private log(response: any) {
    console.log( response.data);
  }

  private handleError(error: Error, errorValue: any) {
    console.log(error);
    return of(errorValue);
  }

  getAllUsers(): Observable<ResponseBody> {
    return this.http.get<ResponseBody>(`${this.userUriApi}/api/users`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getAllTeachers(): Observable<ResponseBody> {
    return this.http
      .get<ResponseBody>(`${this.userUriApi}/api/users/teachers`)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }

  getUsersByRole(role: Role): Observable<ResponseBody> {
    return this.http
      .get<ResponseBody>(`${this.userUriApi}/api/users/getByRole/${role}`)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }

  getUserById(userId: number): Observable<ResponseBody> {
    return this.http
      .get<ResponseBody>(`${this.userUriApi}/api/users/getById/${userId}`)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }

  getUserByUsername(username: string): Observable<ResponseBody> {
    return this.http
      .get<ResponseBody>(
        `${this.userUriApi}/api/users/getByUsername/${username}`
      )
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }

  searchUser(keyword: string): Observable<ResponseBody> {
    return this.http
      .get<ResponseBody>(`${this.userUriApi}/api/users/search/${keyword}`)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }

  updateUser(user: Users, userId: number): Observable<ResponseBody> {
    return this.http
      .put<ResponseBody>(
        `${this.userUriApi}/api/users/update/${userId}`,
        user,
        this.httpOptions
      )
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, null))
      );
  }

  addUser(user: Users): Observable<ResponseBody> {
    return this.http
      .post<ResponseBody>(
        `${this.userUriApi}/api/users/add`,
        user,
        this.httpOptions
      )
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, null))
      );
  }

  deleteUserById(userId: number): Observable<ResponseBody> {
    return this.http
      .delete<ResponseBody>(`${this.userUriApi}/api/users/delete/${userId}`)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, null))
      );
  }
}
