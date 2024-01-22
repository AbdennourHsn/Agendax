import { Component, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";
import { AuthService } from "app/services/auth.service";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/agenda", title: "Agenda", icon: "today", class: "" },
  { path: "/user-profile", title: "User Profile", icon: "person", class: "" },
  { path: "/table-list", title: "Events", icon: "celebration", class: "" },
  { path: "/todo", title: "Todo", icon: "checklist", class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "notifications",
    class: "",
  },
  // { path: "/upgrade", title: "Logout", icon: "logout", class: "active-pro" },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  Logout() {
    this.auth.logout();
    this.router.navigate(["/login"]);
  }
}
