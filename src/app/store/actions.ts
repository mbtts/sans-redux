export interface IAction<K, T> {
  type: K;
  value: T;
}

export const createAction = <K, T>(type: K) => (value: T): IAction<K, T> => {
  return {
    type,
    value
  }
}
