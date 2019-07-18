import * as React from "react";
import { Provider } from "./store/Store";
import { TodoList } from "./components/TodoList/TodoList";

export class App extends React.Component {
  public render() {
    return <Provider>
      <TodoList />
    </Provider>
  }
}
