import * as React from "react";
import { Provider } from "./store/Store";
import { TodoList } from "./components/TodoList/TodoList";

export class App extends React.PureComponent {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return <Provider>
      <TodoList />
    </Provider>
  }
}
