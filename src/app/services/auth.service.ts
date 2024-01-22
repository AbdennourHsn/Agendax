import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, map } from "rxjs";
import { response } from "express";
import { User } from "app/models/User";
import { jwtDecode } from "jwt-decode";
import { UserInfo } from "app/models/UserInfo";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isAuthenticated = false;
  private apiUrl = environment.apiUrl;

  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {}

  Register(modelObj: any): Observable<any> {
    console.log(modelObj);
    const body = new URLSearchParams(modelObj).toString();
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
    });
    return this.http
      .post<User>(`${this.apiUrl}/Account/register`, body, { headers })
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        })
      );
  }

  login(modelObj: any): Observable<any> {
    const body = new URLSearchParams(modelObj).toString();
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
    });
    return this.http
      .post<User>(`${this.apiUrl}/Account/login`, body, { headers })
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        })
      );
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  logout(): void {
    localStorage.removeItem("user");
    this.currentUserSource.next(null);
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  getUserId() {
    const user = localStorage.getItem("user");
    const userString = JSON.parse(user);
    if (user == null) return;
    return jwtDecode(userString.token).sub;
  }

  getUserInfo() {
    return this.http.get<UserInfo>(
      `${this.apiUrl}/Account/user/` + this.getUserId()
    );
  }
}
