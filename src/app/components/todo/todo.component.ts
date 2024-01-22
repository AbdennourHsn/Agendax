import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TodoFormComponent } from "../todo-form/todo-form.component";
import { TodosService } from "app/services/todos-service";
import { response } from "express";
import { Todo } from "app/models/Todo";

@Component({
  selector: "app-typography",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private dialog: MatDialog, private todoService: TodosService) {}

  ngOnInit() {
    this.GetTodos();
  }

  GetTodos() {
    this.todoService.getUserTasks().subscribe({
      next: (users) => (this.todos = users),
    });
  }

  GetColorValue(colorName) {
    if (colorName == "red") return "#ef6060";
    else if (colorName == "rose") return "#ffb6f3";
    else if (colorName == "green") return "#038934";
    else if (colorName == "yellow") return "#f0b800f2";
    else if (colorName == "blue") return "#0095ff";
  }

  GetDate(dateString) {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;

    return day + "/" + month;
  }

  DeleteTodo(id: number) {
    this.todoService.DeleteToDo(id).subscribe(
      () => {
        this.GetTodos();
        console.log(`Todo with ID ${id} deleted successfully.`);
      },
      (error) => {
        console.error(`Error deleting todo with ID ${id}: `, error);
      }
    );
  }

  openForm(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(TodoFormComponent, {
      width: "700px",
      height: "550px",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
