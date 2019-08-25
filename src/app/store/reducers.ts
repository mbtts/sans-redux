import { IAction } from "./actions";
import { IAppState } from "./AppState";
import { todoReducer } from "../components/TodoList/reducer";

type IReducer = (action: IAction<any, any>, state: IAppState) => IAppState;

const reducers: IReducer[] = [
  todoReducer
]

export const reducer = (action: IAction<any, any>, state: IAppState): IAppState => {
  console.log("Event dispatched", action, state);
  console.log('--------------------------');

  const result = reducers.reduce((acc, nextReducer) => nextReducer(action, acc), state);

  console.log("New state", result);
  console.log('--------------------------');
  return result;
}
