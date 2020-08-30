import React, { useState, useContext, createContext } from 'react'


const UserAccountContext = createContext();

export default function UserAccountProvider({children}) {
    const [userAccount, setUserAccount] = useState();
    return (
        <UserAccountContext.Provider value={{userAccount, setUserAccount}}>
            {children}
        </UserAccountContext.Provider>
    )
}

export function useUserAccounts(){
    const context = useContext(UserAccountContext);
    const { userAccount, setUserAccount } = context;
    return {userAccount, setUserAccount};
}
