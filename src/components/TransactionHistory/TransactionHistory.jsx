import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th className={styles.name}>Type</th>
          <th className={styles.name}>Amount</th>
          <th className={styles.name}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr className={styles.line} key={transaction.id}>
            <td className={styles.value}>{transaction.type}</td>
            <td className={styles.value}>{transaction.amount}</td>
            <td className={styles.value}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transaction: PropTypes.array,
};
