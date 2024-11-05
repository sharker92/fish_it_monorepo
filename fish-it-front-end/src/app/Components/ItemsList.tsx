import React from 'react';
import { AlsuperItemType } from '../lib/types/alsuperItemType';
import styles from './ItemList.module.css';

export default function ItemsList({
  entries,
  deleteItem,
}: Readonly<{
  entries: AlsuperItemType[];
  deleteItem: (itemId: number) => void;
}>) {
  return (
    <ul className="mt-3">
      <b className="ms-3">Items:</b>
      {entries.map(
        ({
          itemId,
          name,
          quantity,
          branch_id,
          unit,
          variant,
          comment,
        }: AlsuperItemType) => {
          return (
            <button
              className={`${styles.btn} ${styles['btn-blue']}`}// seguir con los estilos de tailwind y modulos 🤩
              key={itemId}
              onClick={() => {
                deleteItem(itemId);
              }}
            >
              {name + quantity + branch_id + unit + variant + comment}
            </button>
          );
        },
      )}
    </ul>
  );
}
