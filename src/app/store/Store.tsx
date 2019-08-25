import * as React from "react";
import { useReducer } from "react";
import { initContext } from "./context";
import { reducer, IReducer } from "./reducers";
import { initState } from "./AppState";

export const StoreContext = React.createContext(initContext);

export function Provider({ children }: any) {
  const [state, dispatch] = useReducer<IReducer>(reducer, initState);

  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      {children}
    </StoreContext.Provider>
  );
};
