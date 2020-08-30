import React, { useState, useContext, createContext } from 'react'



 export const ExpenseContext = createContext();

export default function ExpensesProvider({ children }) {
    const [expenses, setExpenses] = useState();
    return (
        <ExpenseContext.Provider value={{expenses, setExpenses}}>
            {children}
        </ExpenseContext.Provider>
    )
}

export function useExpenses(){
    const context = useContext(ExpenseContext);
    const { expenses, setExpenses } = context;
    return {expenses, setExpenses};
}
