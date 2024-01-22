import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./components/layouts/admin-layout/admin-layout.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:"/login",
    redirectTo : "login",
    pathMatch : "full"
  },
  {
    path:'register',
    component: RegistrationComponent
  },
  {
    path:"/register",
    redirectTo : "login",
    pathMatch : "full"
  },
  {
    path: "",
    redirectTo: "agenda",
    pathMatch: "full",
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./components/layouts/admin-layout/admin-layout.module").then(
            (m) => m.AdminLayoutModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
