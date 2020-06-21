import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction =() =>{
    const [description,setDescription] = useState('');
    const [transactionAmount,setTransactionAmount] = useState(0);

    const {AddTransaction} = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id : new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }
        AddTransaction(newTransaction);
    }
    
    return(
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text" 
                    placeholder="Detail of Transaction"
                     id="description" 
                     value={description}
                     onChange={(e)=> setDescription(e.target.value)}>
                    </input>

                </div>
                <div className="form-control">
                    <label htmlFor="transactionAmount">
                       Transaction Amount (for expense add - sign )
                    </label>
                    <input type="number" 
                    placeholder="Amount of Transaction"
                    id="transactionAmount"
                     value={transactionAmount}
                     onChange={(e)=>setTransactionAmount(e.target.value)}>
                    </input>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}