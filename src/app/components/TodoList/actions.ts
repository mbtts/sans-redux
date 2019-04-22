import { createAction, IAction } from "../../store/actions";
import { TodoListEvents } from "./events";

export type ITodoListAction =
  IAction<TodoListEvents.ADD_TODO, string> |
  IAction<TodoListEvents.REMOVE_TODO, string> |
  IAction<TodoListEvents.REMOVE_ALL_TODOS, void>;

export const AddTodo = createAction<TodoListEvents.ADD_TODO, string>(TodoListEvents.ADD_TODO);
export const RemoveTodo = createAction<TodoListEvents.REMOVE_TODO, string>(TodoListEvents.REMOVE_TODO);
export const RemoveAllTodos = createAction<TodoListEvents.REMOVE_ALL_TODOS, void>(TodoListEvents.REMOVE_ALL_TODOS);
