import React from 'react';
import {Header} from './components/header'
import {Balance} from './components/balance'
import {AccountSummary} from './components/accountSummary'
import {TransactionHistory} from './components/transactionHistory'
import {AddTransaction} from './components/addTransaction'
import {GlobalProvider} from './context/GlobalState'
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div>

      
        <Header/>
        <div className="container">
            <Balance/>
            <AccountSummary/>
            <TransactionHistory/>
            <AddTransaction/>
        </div>
        </div>
     </GlobalProvider>
  );
}

export default App;
