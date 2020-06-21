import React, { createContext,useReducer } from 'react'
import AppReducer from './AppReducer';

//  creating initial state
const initialState = {
    transactions: []
}
//  creting the global context
export const GlobalContext = createContext(initialState);

//  creting a provider for globalcontext
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);
    function delTransaction(id){
        dispatch(
            {
                type: 'Delete_Transaction',
                payload: id
            }
        )
    }
    function AddTransaction(transaction){
        dispatch(
            {
                type: 'Add_Transaction',
                payload: transaction
            }
        )
    }
    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                AddTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
        
    );
}