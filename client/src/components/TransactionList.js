import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { useParams } from 'react-router-dom';


import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  let { clientId } = useParams();
  useEffect(() => {
    if (clientId) {
      getTransactions(clientId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
    </>
  )
}
