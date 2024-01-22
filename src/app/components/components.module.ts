import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./main/footer/footer.component";
import { NavbarComponent } from "./main/navbar/navbar.component";
import { SidebarComponent } from "./main/sidebar/sidebar.component";
import { TodoFormComponent } from "./todo-form/todo-form.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TodoFormComponent,
  ],
  exports: [FooterComponent, NavbarComponent, SidebarComponent],
})
export class ComponentsModule {}
