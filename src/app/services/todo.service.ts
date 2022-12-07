import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Todo, TodoCoordinate, TodoStatus } from "../models/todo.models";
import { TodoDTO } from "../models/todo.dtos";
import { Injectable } from "@angular/core";

@Injectable()
export class TodoService {
  private _baseUrl = 'http://localhost:8080/todos/';

  public constructor(private _http: HttpClient) { }

  private toModel(dto: TodoDTO): Todo {
    let dueDate = new Date(dto.dueDate);

    let status = TodoStatus.CLOSED;
    if (!dto.done)
      status = dueDate.getTime() < new Date().getTime() ? TodoStatus.LATE : TodoStatus.ON_GOING;

    let position: TodoCoordinate | null = null;
    if (dto.latitude != null && dto.longitude != null)
      position = { latitude: dto.latitude, longitude: dto.longitude };

    return new Todo(dto.id, dto.label, dueDate, dto.done, dto.removable, status, position);
  }

  public listAll(): Observable<Todo[]> {
    return this._http
      .get<TodoDTO[]>(this._baseUrl)
      .pipe(
        map(dtos => dtos.map(dto => this.toModel(dto)))
      );
  }
}
