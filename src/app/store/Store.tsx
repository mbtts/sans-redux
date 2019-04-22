import * as React from "react";
import { IAction } from "./actions";
import { initContext, IAppContext } from "./context";
import { reducer } from "./reducers";
import { IAppState, initState } from "./AppState";
import { StoreEvent } from "./events";

const context = React.createContext(initContext);

interface IProviderState {
  appState: IAppState
}

export class Provider extends React.Component<any, IProviderState> {
  constructor(props: any) {
    super(props);
    this.dispatch = this.dispatch.bind(this);
    this.state = { appState: initState };
  }

  private dispatch(action: IAction<StoreEvent, any>) {
    const newState: IAppState = reducer(action, this.state.appState);
    this.setState({ appState: newState });
  }

  public render() {
    return <context.Provider value={{ dispatch: this.dispatch, state: this.state.appState }}>
      {this.props.children}
    </context.Provider>
  }
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type Context = {
  context: IAppContext
}

export function withAppContext<P extends Context, T = Omit<P, 'context'>>(Component: React.ComponentClass<P>) {
  return (props: T) => {
    return <context.Consumer>
      {(value: IAppContext) => {
        //@ts-ignore
        return <Component {...props} context={value} />;
      }}
    </context.Consumer>;
  };
}
