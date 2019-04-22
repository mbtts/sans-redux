import { IAction } from "../../store/actions";
import { IAppState } from "../../store/AppState";
import { Events } from "../../store/events";

export const todoReducer = (action: IAction, state: IAppState) => {
  switch (action.type) {
    case Events.ADD_TODO:
      const newState = { todoList: { todos: [action.value].concat(state.todoList.todos) } };
      return { ...state, ...newState };

    default:
      return state;
  }
}