import { IAction } from "./actions";
import { IAppState } from "./AppState";
import { todoReducer } from "../components/TodoList/reducer";

type IReducer = (action: IAction, state: IAppState) => IAppState;

const reducers: IReducer[] = [
  todoReducer
]

export const reducer = (action: IAction, state: IAppState): IAppState => {
  console.log("Event dispatched", action, state);
  console.log('--------------------------');

  const result = reducers.reduce((acc, nextReducer) => {
    //@ts-ignore
    return nextReducer(action, acc);
  }, state);

  console.log("New state", result);
  console.log('--------------------------');
  return result;
}
