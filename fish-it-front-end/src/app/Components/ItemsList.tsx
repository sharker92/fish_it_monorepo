import React, { useState } from 'react';
import { AlsuperItemType } from '../lib/types/alsuperItemType';
import styles from './ItemList.module.css';

export default function ItemsList({
  entries,
  deleteItem,
}: Readonly<{
  entries: AlsuperItemType[];
  deleteItem: (itemId: number) => void;
}>) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <>
      <h1 className="text-2xl font-bold mt-4 mb-2 ">Items:</h1>

      <div className="space-y-2">
        {entries.map(
          (
            { itemId, name, quantity, branch_id, unit, variant, comment },
            index,
          ) => {
            return (
              <>
                <button
                  className={`${styles.btn} ${styles['btn-white']} block`}
                  key={itemId}
                  onClick={() => toggleExpand(index)}
                  // onClick={() => {
                  //   deleteItem(itemId);
                  // }}
                >
                  {name + quantity + branch_id + unit + variant + comment}
                </button>
                {expandedIndex === index && (
                  <div className="expanded-content">
                    <p>
                      This is the additional data that is shown when the
                      component is expanded.
                    </p>
                    {/* Add more data here */}
                  </div>
                )}
              </>
            );
          },
        )}
      </div>
    </>
  );
}
// todo add delete button and pretify displaing data.

