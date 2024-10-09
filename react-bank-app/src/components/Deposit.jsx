import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Deposit = ({accNo,accUser}) => {
  const [currentDeposit, setCurrentDeposit] = useState(0);
  const [balance, setBalance] = useState(0);
  const [withdraw, setWithdraw] = useState(0);

  const handleTransactions = (e) => {
    e.preventDefault();
    let deposit;
    let withdrawAmount;

    if (!accNo && !accUser) {
      alert("account not found");
      return;
    }
    if (currentDeposit) {
      deposit = currentDeposit;
      deposit = parseInt(deposit);

      console.log("deposit:", deposit);
      setBalance((prevBalance) => prevBalance + deposit);
      setCurrentDeposit(0);
    }

      if (withdraw) {
        if ((balance-withdraw)<= 500) {
            alert("Balance is not sufficient for withdrawal");
            setWithdraw(0);
            return;
          }
        withdrawAmount = withdraw;
        withdrawAmount = parseInt(withdrawAmount);
        console.log("withdraw:", withdraw);
        setBalance((prevBalance) => prevBalance - withdrawAmount);
        setWithdraw(0);
      }
      
  };
  console.log("After withdraw:", balance);
  return (
    <>
      <h1>Deposit Form</h1>
      <h4>Account Holder :{accUser} </h4>
      <h4>Account No: {accNo}</h4>
      <form onSubmit={handleTransactions}>
        <label>Amount to Deposit</label>
        <input
          type="number"
          onChange={(e) => {
            setCurrentDeposit(e.target.value);
          }}
          value={currentDeposit}
        />
        <button type="button" onClick={handleTransactions}>
          Deposit
        </button>
        {currentDeposit != 0 && <div>Amount Deposited:{currentDeposit}</div>}
        <label>Amount to Withdraw</label>
        <input
          type="number"
          onChange={(e) => {
            setWithdraw(e.target.value);
          }}
          value={withdraw}
        />
        <button type="button" onClick={handleTransactions}>
          Withdraw
        </button>
        <div>Current Balance:{balance}</div>
      </form>
    </>
  );
};
