import * as React from "react";
import { withAppContext } from "../../store/Store";
import { IAppContext } from "../../store/context";
import { AddTodo } from "./actions";

export interface ITodoInputProps {
  context: IAppContext
}

interface ITodoInputState {
  text: string
}

class TodoInputComponent extends React.Component<ITodoInputProps, ITodoInputState> {
  constructor(props: ITodoInputProps) {
    super(props);
    this.state = { text: "" };
    this.update = this.update.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  private update(event: any) {
    this.setState({ text: event.target.value });
  }

  private onSubmit(event: React.FormEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.props.context.dispatch(AddTodo(this.state.text));
    this.setState({ text: "" })
    return false;
  }

  public render() {
    return <form onSubmit={this.onSubmit}>
      <input type="text" name="todo" value={this.state.text} onChange={this.update} />
    </form>
  }
}

export const TodoInput = withAppContext(TodoInputComponent);
