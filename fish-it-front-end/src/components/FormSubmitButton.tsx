import React from 'react';
import styles from './ItemList.module.css';

export function FormSubmitButton() {
  return (
    <button className={`${styles.btn} ${styles['btn-large']}`}>Add Item</button>
  );
}

