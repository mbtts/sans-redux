import { IAppState } from "../../store/AppState";
import { TodoListEvents } from "./events";
import { ITodoListAction } from "./actions";

export const todoReducer = (state: IAppState, action: ITodoListAction) => {
  switch (action.type) {
    case TodoListEvents.ADD_TODO: {
      const newState = { todoList: { todos: [action.value].concat(state.todoList.todos) } };
      return { ...state, ...newState };
    }

    case TodoListEvents.REMOVE_TODO: {
      const newState = { todoList: { todos: state.todoList.todos.filter(str => str !== action.value) } };
      return { ...state, ...newState };
    }

    case TodoListEvents.REMOVE_ALL_TODOS: {
      const newState = { todoList: { todos: [] } };
      return { ...state, ...newState };
    }

    default:
      return state;
  }
}