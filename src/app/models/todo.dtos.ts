export interface TodoDTO {
  id: number;
  label: string;
  dueDate: string;
  done: boolean;
  removable: boolean;
  latitude: number | null;
  longitude: number | null;
}
