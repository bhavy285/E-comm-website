import React, { createContext, useContext, useReducer } from "react";

//prepares the datalayers
export const StateContext = createContext();
// wrap our app and provide the data layers
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull information from the data layers 
export const useStateValue = () => useContext(StateContext);