import React, { useEffect } from 'react'
import { useUserAccounts } from '../../context/UserAccount';
import { useExpenses } from '../../context/Expenses';
export default function UserAccount() {
    const { setUserAccount } = useUserAccounts();
    const { expenses } = useExpenses();

    useEffect(()=>{
        setUserAccount({
            "id": 1,
            "id_user": 1,
            "total_income": 1500,
            "meta": "800"
          })
    },[setUserAccount]);

    return (
        <div>
            {expenses && expenses.map((expense, index)=>(
                <div key={index}>
                    {expense.id}
                    
                </div>
            ))}
            
        </div>
    )
}
