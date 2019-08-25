import { IAction } from "./actions";
import { IAppState } from "./AppState";
import { todoReducer } from "../components/TodoList/reducer";

export type IReducer = (state: IAppState, action: IAction<any, any>) => IAppState;

const reducers: IReducer[] = [
  todoReducer
]

export const reducer = (state: IAppState, action: IAction<any, any>): IAppState => {
  console.log("Event dispatched", action, state);
  console.log('--------------------------');

  const result = reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state);

  console.log("New state", result);
  console.log('--------------------------');
  return result;
}
