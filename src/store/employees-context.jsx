import { createContext, useReducer } from "react";
import { findLongestWorkingPair } from "../helpers/helpers.js";

const initialState = {
  rawData: [],
  importStatus: null,
  longestOverlap: {},
};

const EmployeeContext = createContext({
  ...initialState,
  setData: () => {},
  setImportComplition: () => {},
  setLongestOverlap: () => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        rawData: [...state.rawData, ...action.payload],
        importStatus: "importing",
      };
    case "SET_BEST_OVERLAP":
      return {
        ...state,
        longestOverlap: findLongestWorkingPair(state.rawData),
        importStatus: "completed",
      };
    default:
      return state;
  }
};

const EmployeeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setData = (data) => {
    dispatch({ type: "SET_DATA", payload: data });
  };

  const setLongestOverlap = () => {
    dispatch({ type: "SET_BEST_OVERLAP" });
  };

  const context = {
    ...state,
    setData,
    setLongestOverlap,
  };

  return (
    <EmployeeContext.Provider value={context}>
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };
