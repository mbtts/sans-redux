import { StoreEvent } from "./events";

export interface IAction<K extends StoreEvent, T> {
  type: K;
  value: T;
}

export const createAction = <K extends StoreEvent, T>(type: K) => (value: T): IAction<K, T> => {
  return {
    type,
    value
  }
}
