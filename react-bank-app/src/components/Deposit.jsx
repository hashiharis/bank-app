import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Deposit=({accUser,accNo})=>{

    const[deposit,setDeposit]=useState({})

    const handleDeposit=(e)=>{
        const{value}=e.target;
        setDeposit({
            ...deposit,
            amount:value
        })
    }

    const handlePayment=(e)=>{
        const{value}=e.target;
        setDeposit({
            ...deposit,
            paymentMethod:value
        })
    }
    const handleSubmit=(e)=>{
         e.preventDefault();
         if(!accNo && !accUser){
            alert("account not found")
            return
         }
         setDeposit({
            accNo,
            accUser,
            ...deposit
         }
           )
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Deposit Form</h1>
           <h4>Account Holder :{accUser} </h4>
            <h4>Account No: {accNo}</h4>
            <label>Amount to Deposit</label>
            <input type="number" onChange={handleDeposit} value={deposit.amount}/>
            <select onChange={handlePayment}>
                Select Payment Method
                <option value="Debit/Credit Card">Debit/Credit Card</option>
                <option value="Via UPI">Via UPI</option>
                <option value="NetBanking">NetBanking</option>
            </select>
            <button>Deposit</button>
            {deposit && (<div>Amount Deposited:{deposit.amount} via {deposit.paymentMethod}</div>)}
        </form>
    )
}