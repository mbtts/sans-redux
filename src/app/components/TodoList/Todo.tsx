import * as React from "react";
import { withAppContext } from "../../store/Store";
import { IAppContext } from "../../store/context";
import { AddTodo, RemoveTodo } from "./actions";

export interface ITodoProps {
  context: IAppContext,
  todo: string;
}

class TodoComponent extends React.PureComponent<ITodoProps> {
  constructor(props: ITodoProps) {
    super(props);
  }

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
