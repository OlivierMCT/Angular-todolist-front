export class Todo {
  public constructor(
    public id: number,
    public label: string,
    public dueDate: Date,
    public isDone: boolean,
    public isRemovable: boolean,
    public status: TodoStatus,
    public position: TodoCoordinate | null
  ) {}
}

export interface TodoCoordinate {
  latitude: number;
  longitude: number;
}

export enum TodoStatus {
  CLOSED, ON_GOING, LATE
}
