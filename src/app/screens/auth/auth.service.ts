import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { ResponseBody } from '../../shared/responseBody';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = true;
  jwtToken: string = '';
  userUriApi: string = 'http://localhost:8086';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  private setJwt(response: any) {
    console.log(response?.data);
    response?.data && (this.jwtToken = response.data);
    this.jwtToken ? (this.isLoggedIn = true) : (this.isLoggedIn = false);
  }

  private handleError(error: Error, errorValue: any) {
    console.log(error);
    return of(errorValue);
  }

  login(name: string, password: string): Boolean {
    const dto = { username: name, password: password };
    this.http
      .post<ResponseBody>(
        `${this.userUriApi}/api/auth/login`,
        dto,
        this.httpOptions
      )
      .pipe(
        tap((response) => this.setJwt(response)),
        catchError((error) => this.handleError(error, null))
      );
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
    this.jwtToken = '';
  }
}
