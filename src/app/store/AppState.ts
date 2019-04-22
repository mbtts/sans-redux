export interface IAppState {
  todoList: {
    todos: string[];
  }
}

export const initState: IAppState = {
  todoList: {
    todos: ["Create Flux without Redux"]
  }
};
