import React, { createContext, useReducer, useContext } from "react";

type Format = {
  width: number;
  height: number;
  count: number;
  plateThickness: number;
  type: string;
};

interface AppState {
  formats: Format[];
}

const initialState: AppState = {
  formats: [],
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const appReducer = (state: AppState, action: any): AppState => {
  switch (action.type) {
    case "SET_FORMATS":
      return { ...state, formats: action.payload };
    default:
      return state;
  }
};


export const AppProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
