import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { AuthService } from "./auth.service";
import { Todo } from "app/models/Todo";
import { DatePipe } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class TodosService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserTasks() {
    return this.http.get<Todo[]>(
      `${this.apiUrl}/Todos/user/${this.authService.getUserId()}`
    );
  }

  AddUserTask(modelObj) {
    console.log(modelObj);
    const body = new URLSearchParams(modelObj).toString();
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
    });
    return this.http.post(
      `${this.apiUrl}/Todos/addTodo/${this.authService.getUserId()}`,
      body,
      { headers, responseType: "text" }
    );
  }

  DeleteToDo(id: number) {
    return this.http.delete(`${this.apiUrl}/Todos/deleteTodo/${id}`, {
      responseType: "text",
    });
  }
}
