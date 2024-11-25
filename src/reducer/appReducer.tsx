

type Format = {
    width: number;
    height: number;
    count: number;
    plateThickness: number;
    type: string;
  };
  
  export interface AppState {
    formats: Format[];
  }
  
  export type Action =
    | { type: "SET_FORMATS"; payload: Format[] };
  
  export const initialState: AppState = {
    formats: [],
  };
  
  export const appReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
      case "SET_FORMATS":
        return { ...state, formats: action.payload };
      default:
        return state;
    }
  };
  