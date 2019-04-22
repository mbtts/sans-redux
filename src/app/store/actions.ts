import { Events } from "./events";

export interface IAction {
  type: Events;
  value: any;
}

const createAction = <T>(type: Events) => (value: T) => {
  return {
    type,
    value
  }
}

export const AddTodo = createAction<string>(Events.ADD_TODO);
