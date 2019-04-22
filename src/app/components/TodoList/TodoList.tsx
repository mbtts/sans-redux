import * as React from "react";
import { withAppContext } from "../../store/Store";
import { IAppContext } from "../../store/context";
import { Todo } from "./Todo";
import { TodoInput } from "./TodoInput";
import { RemoveAllTodos } from "./actions";

export interface ITodoListProps {
  context: IAppContext
}

class TodoListComponent extends React.PureComponent<ITodoListProps> {
  constructor(props: ITodoListProps) {
    super(props);
  }

  public render() {
    return <>
      <ul>
        {this.props.context.state.todoList.todos.map((todo, index) => {
          return <Todo key={index} todo={todo} />
        })}
      </ul>
      <TodoInput />
      <button onClick={() => this.props.context.dispatch(RemoveAllTodos())}>remove all</button>
    </>
  }
}

export const TodoList = withAppContext(TodoListComponent);
