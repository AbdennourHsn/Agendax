import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserInfo } from "app/models/UserInfo";
import { AuthService } from "app/services/auth.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserProfileComponent implements OnInit {
  Form: FormGroup;

  userData: any = {};
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.Form = this.fb.group({
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required],
      Email: ["", [Validators.required, Validators.email]],
      UserName: ["", Validators.required],
      Adress: [""],
      Country: [""],
      Gender: [""],
      AboutMe: [""],
    });
    this.authService.getUserInfo().subscribe({
      next: (user) => {
        (this.userData.FirstName = user.firstName),
          (this.userData.LastName = user.lastName),
          (this.userData.UserName = user.userName),
          (this.userData.Email = user.email),
          (this.userData.Adress = user.adress),
          (this.userData.Country = user.country),
          (this.userData.aboutMe = user.aboutMe),
          (this.userData.Gender = user.gender);
        console.log(user);
        this.Form.patchValue(this.userData);
      },
      error: () => {
        console.log("Can't load user Info");
      },
    });
  }

  updateUser() {}
}
