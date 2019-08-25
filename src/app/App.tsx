import * as React from "react";
import { Provider } from "./store/Store";
import { TodoList } from "./components/TodoList/TodoList";

export function App() {
  return (
    <Provider>
      <TodoList />
    </Provider>
  )
}
