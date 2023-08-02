import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext=createContext();

const initialState={
    details:localStorage.getItem("details") ? JSON.parse(localStorage.getItem("details")):[],
}
export const GlobalProvider=(props)=> {
    const [state,dispatch]= useReducer(AppReducer,initialState);

    useEffect(()=>{
        localStorage.setItem("details",JSON.stringify(state.details));

    },[state])

    console.log(state)
    const detailsOn= (movie) =>{
        dispatch({type: "DETAILS", payload:movie});
    };
    return(
        <GlobalContext.Provider value={{
            details: [],
            details: state.details,
            detailsOn,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}