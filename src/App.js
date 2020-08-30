import React from 'react';

import ExpensesProvider from './context/Expenses';
import UserAccountProvider from './context/UserAccount';

import Expenses from './components/Expenses';
import UserAccount from './components/UserAccount';

function App() {
  return (
    <UserAccountProvider>
      <ExpensesProvider>
        <UserAccount/>
        <Expenses/>
      </ExpensesProvider>
    </UserAccountProvider>
  );
}

export default App;
