import React from 'react';
import { AlsuperItemType } from '../lib/types/alsuperItemType';

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
            <li
              className="px-2 mt-1 mb-1 ms-2"
              key={itemId}
              onClick={() => {
                deleteItem(itemId);
              }}
            >
              {name + quantity + branch_id + unit + variant + comment}
            </li>
          );
        },
      )}
    </ul>
  );
}
