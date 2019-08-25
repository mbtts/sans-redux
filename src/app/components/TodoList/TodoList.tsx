import * as React from "react";
import { useContext } from "react";
import { RemoveAllTodos } from "./actions";
import { StoreContext } from "../../store/Store";
import { Todo } from "./Todo";
import { TodoInput } from "./TodoInput";

export function TodoList() {
  const { state, dispatch } = useContext(StoreContext);
  const { todoList: { todos } } = state;

  return (
    <>
      <ul>
        {todos.map((todo, index) => <Todo key={index} todo={todo} />)}
      </ul>
      <TodoInput />
      <button onClick={() => dispatch(RemoveAllTodos())}>remove all</button>
    </>
  );
}
