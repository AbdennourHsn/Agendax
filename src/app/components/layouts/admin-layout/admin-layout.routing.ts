import { Routes } from "@angular/router";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { AgendaComponent } from "../../agenda/agenda.component";
import { TodoComponent } from "../../todo/todo.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { LoginComponent } from "app/components/login/login.component";

export const AdminLayoutRoutes: Routes = [
  { path: "user-profile", component: UserProfileComponent },
  { path: "agenda", component: AgendaComponent },
  { path: "todo", component: TodoComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "login", component: LoginComponent },
];
