import React, {createContext, useContext, useReducer} from "react"
export const StateContext = createContext();

export const Stateprovider = ({initialState, reducer, children}) => {
    <StateContext.Provider value = {useReducer(initialState, reducer)}>
        {children}
    </StateContext.Provider>
}

export default Stateprovider;