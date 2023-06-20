export interface Task {
  id: number;
  text: string;
  done: boolean;
}

export interface Store {
  tasks: Task[];
  newTask: string;
}
