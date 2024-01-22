import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginObj: any = {};
  isLoading: boolean = false;
  errorLogin: boolean = false;
  constructor(private authSerice: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authSerice.isAuthenticatedUser() == true)
      this.router.navigateByUrl("/agenda");
  }

  login() {
    this.errorLogin = false;
    this.isLoading = true;
    this.authSerice.login(this.loginObj).subscribe({
      next: (user) => this.router.navigateByUrl("/"),
      error: () => {
        console.log("Error");
        this.errorLogin = true;
        this.isLoading = false;
      },
      complete: () => {
        console.log("Done");
        this.isLoading = false;
      },
    });
  }
}
