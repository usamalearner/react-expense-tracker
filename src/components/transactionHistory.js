import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Transaction} from './Transactions'
export const TransactionHistory =() => {
    const {transactions} = useContext(GlobalContext);
    console.log(transactions)
    return(
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))}
                {/* <li className="plus">
                    project income deliverable 1
                    <span>$10,000</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                        salary payment
                    <span>-$1,000</span>
                    <button className="delete-btn">X</button>
                </li> */}
            </ul>
        </div>
    )
}