import { Component, OnInit } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { User } from "./models/User";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {
    this.setCurrentUser()
  }

  ngOnInit(): void {}

  setCurrentUser() {
    const userString = localStorage.getItem("user");
    if(!userString) return;
    const user: User = JSON.parse(userString);
    this.authService.setCurrentUser(user);
  }
}
