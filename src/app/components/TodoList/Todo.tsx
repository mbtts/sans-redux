import * as React from "react";
import { withAppContext } from "../../store/Store";
import { IAppContext } from "../../store/context";
import { RemoveTodo } from "./actions";

export interface ITodoProps {
  context: IAppContext,
  todo: string;
}

class TodoComponent extends React.Component<ITodoProps> {
  public render() {
    return <li>
      {this.props.todo}
      <button onClick={() => this.props.context.dispatch(RemoveTodo(this.props.todo))}>
        Remove todo
      </button>
    </li>;
  }
}

export const Todo = withAppContext(TodoComponent);
