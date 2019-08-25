import * as React from "react";
import { useContext } from "react";
import { RemoveTodo } from "./actions";
import { StoreContext } from "../../store/Store";

export interface ITodoProps {
  todo: string;
}

export function Todo({ todo }: ITodoProps) {
  const { dispatch } = useContext(StoreContext);

  return (
    <li>
      {todo}
      <button onClick={() => dispatch(RemoveTodo(todo))}>
        Remove todo
      </button>
    </li>
  );
}
