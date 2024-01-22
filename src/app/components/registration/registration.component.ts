import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "app/services/auth.service";

function passwordMatchValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const password = control.get("password");
  const confirmPassword = control.get("confirmPassword");

  if (!password || !confirmPassword) {
    return null;
  }
  return password.value === confirmPassword.value
    ? null
    : { passwordMismatch: true };
}
@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  registerObj: any = {};

  constructor(
    private authSerice: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group(
      {
        email: ["", [Validators.required, Validators.email]],
        username: [""],
        firstName: [""],
        lastName: [""],
        country: [""],
        gender: [""],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
      },
      { validator: passwordMatchValidator }
    );
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      this.registerObj.email = this.form.get("email").value;
      this.registerObj.username = this.form.get("username").value;
      this.registerObj.password = this.form.get("password").value;
      this.registerObj.firstName = this.form.get("firstName").value;
      this.registerObj.lastName = this.form.get("lastName").value;
      this.registerObj.gender = this.form.get("gender").value;
      this.registerObj.country = this.form.get("country").value;
      this.authSerice.Register(this.registerObj).subscribe({
        next: (user) => this.router.navigateByUrl("/"),
        error: (user) => console.log("Can't register"),
      });
    }
  }
}
