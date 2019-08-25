import * as React from "react";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AddTodo } from "./actions";
import { StoreContext } from "../../store/Store";

export function TodoInput() {
  const { dispatch } = useContext(StoreContext);

  const [text, setText] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    dispatch(AddTodo(text));
    setText("");
 
    return false;  
  }

  function update(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return <form onSubmit={onSubmit}>
    <input type="text" name="todo" value={text} onChange={update} />
  </form>
};
