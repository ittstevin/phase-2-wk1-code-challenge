import React, { useState } from 'react';

function NewTransaction() {
  const [transactions, setTransactions] = useState([]);
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions([...transactions, { date, description, category, amount }]);
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  }
  return (
    <div className='NewTransaction'>
      <form onSubmit={handleSubmit}>
        <label>Date :</label>
        <input type="date" placeholder="Date" value={date} onChange={e => setDate(e.target.value)} required/>
        <label>Description :</label>
        <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required/>
        <label>Category :</label>
        <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} required/>
        <label>Amount :</label>
        <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} required/>
        <button type="submit" className="searchButton">Submit</button>
      </form>
      <h2 className='PreviousHeader'>Previous Transactions</h2>
      <div className='ListItem'>
        <ol>
          {transactions.map((transaction, index) => (
            <li key={index}>
              <p>Date: {transaction.date}</p>
              <p>Description: {transaction.description}</p>
              <p>Category: {transaction.category}</p>
              <p>Amount: {transaction.amount}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default NewTransaction;