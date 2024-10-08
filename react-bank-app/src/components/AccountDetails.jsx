import { useState } from "react";
import { Deposit } from "./Deposit";

export const AccountDetails = () => {
  const [userDetails, setUserDetails] = useState({});
  const[userList,setUserList]=useState([])
  const { userName, email, contactNo } = userDetails;


  const handleSubmit=(e)=>{
    e.preventDefault()

    if(!userName && !email && !contactNo){
        alert("Please enter values")
        return
    }
    
    let userEntries={
        accountNo:Math.floor(Math.random()*10000),
        ...userDetails
    }
  setUserList([...userList,userEntries])

  setUserDetails({
    userName:"",
    email:"",
    contactNo:""
  })
  }
  
console.log(userDetails)
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        placeholder="Enter name"
        value={userName}
        onChange={(e) => {
          setUserDetails({ ...userDetails,userName: e.target.value} );
        }}
      />
      <label>Email</label>
      <input type="email" placeholder="Enter email" value={email} onChange={(e)=>{setUserDetails(
       {...userDetails, email:e.target.value}
      )}} />
      <label>Contact No</label>
      <input type="number" placeholder="Enter contact number" value={contactNo} onChange={(e)=>{setUserDetails(
        
         {...userDetails,
            contactNo:e.target.value}
        
      )}}/>
      <button>Submit</button>
      {
        userList.map((user)=>{
            return (
               <Deposit key={user.accountNo} accUser={user.userName} accNo={user.accountNo}/>
            )
        })
      }

    </form>
  );
};
