import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./components/layouts/admin-layout/admin-layout.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { MatInputModule } from "@angular/material/input";
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
