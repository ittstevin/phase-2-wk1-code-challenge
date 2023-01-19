import React,{useState, useEffect} from "react";


function Transaction (){
  
    const [transactions, setTransactions] = useState([]);
    console.log(transactions)

    useEffect (()=>{
      fetch ('https://github.com/ittstevin/phase-2-wk1-code-challenge/blob/main/db.json')
      .then(response => response.json())
      .then((data) => 
        setTransactions(data.transactions))
    },[])

    return(
      <center>
        <table className="TableBody">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
          </thead>
          <tbody> 
          {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
              </tr>
          ))}
          </tbody>
      </table> 
     </center>
      );

}

export default Transaction
