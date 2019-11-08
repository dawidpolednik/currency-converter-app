import React from "react";
import styles from "./TransactionList.module.scss";
const TransactionItem = ({
  name,
  amount,
  conversionAmount,
  index,
  toDelete
}) => {
  return (
    <li key={index} className={styles.itemContainer}>
      <p className={styles.itemParagraph}>
        {`Nazwa: ${name} | Kwota do przeliczenia: ${parseFloat(amount).toFixed(
          2
        )} EUR | Wartość transakcji: ${conversionAmount} PLN`}
      </p>
      <button className={styles.deleteButton} onClick={() => toDelete()}>
        Usuń
      </button>
    </li>
  );
};

export default TransactionItem;
