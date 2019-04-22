import * as React from "react";
import { withAppContext } from "../../store/Store";
import { IAppContext } from "../../store/context";
import { AddTodo } from "../../store/actions";

export interface ITodoProps {
  context: IAppContext,
  todo: string;
}

class TodoComponent extends React.PureComponent<ITodoProps> {
  constructor(props: ITodoProps) {
    super(props);
  }

  public render() {
    return <li onClick={() => this.props.context.dispatch(AddTodo(this.props.todo))}>{this.props.todo}</li>;
  }
}

export const Todo = withAppContext(TodoComponent);
