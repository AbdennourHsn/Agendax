import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Route, Router } from "@angular/router";
import { TodosService } from "app/services/todos-service";
import { response } from "express";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.css"],
})
export class TodoFormComponent implements OnInit {
  color: string = "";
  formData: any = {};
  constructor(
    private ref: MatDialogRef<TodoFormComponent>,
    private todoService: TodosService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  OnSetColor(color) {
    this.color = color;
  }

  SaveTask() {
    this.formData.color = this.color;

    this.todoService.AddUserTask(this.formData).subscribe({
      next: (response) => {
        console.log(response);
        this.ClosePopUp();
      },
    });
  }
  ClosePopUp() {
    this.ref.close();
  }
}
