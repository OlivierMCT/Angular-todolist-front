import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo.models';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  public allTodos: Todo[] = [];

  public constructor(private _todoService: TodoService){
    this._todoService.listAll().subscribe(todos => this.allTodos = todos);
  }
}
