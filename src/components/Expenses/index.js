import React, { useEffect } from 'react';
import { useExpenses } from '../../context/Expenses';
import { useUserAccounts } from '../../context/UserAccount';

const userExpenses = [
    {id: 1,"value": 200,"description": "compras","date_expense": "2020/08/18"},
    {id: 2,"value": 200,"description": "compras","date_expense": "2020/08/18"},
    {id: 3,"value": 200,"description": "compras","date_expense": "2020/08/18"},
    {id: 4,"value": 200,"description": "compras","date_expense": "2020/08/18"},
    {id: 5,"value": 200,"description": "compras","date_expense": "2020/08/18"},
];
export default function Expenses(){
    const {expenses, setExpenses} = useExpenses();
    const { userAccount } = useUserAccounts();
    useEffect(()=>{
        setExpenses(userExpenses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <div>
            {expenses && expenses.map((expense, index)=>{return(
                <div key={index}>
                     
                    {expense.id}
                </div>
            )})}
            <button 
                onClick={()=>{
                    setExpenses(userExpenses.filter((userExpense)=>{
                        return userExpense.id !== userExpenses.length
                    }))
                    userExpenses.pop();
                }}
            >
                remove
            </button>
            <br/>{userAccount !== undefined && userAccount.meta}
        </div>
    )
}
 