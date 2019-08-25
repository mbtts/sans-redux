import * as React from "react";
import { useState } from "react";
import { IAction } from "./actions";
import { initContext } from "./context";
import { reducer } from "./reducers";
import { initState } from "./AppState";

export const StoreContext = React.createContext(initContext);

export function Provider({ children }: any) {
  const [state, setState] = useState(initState);
 
  function dispatch(...actions: IAction<any, any>[]) {
    const newState = actions.reduce((s, a) => reducer(a, s), state);
    setState(newState);
  }

  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      {children}
    </StoreContext.Provider>
  );
};
