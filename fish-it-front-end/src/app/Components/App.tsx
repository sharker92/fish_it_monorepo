import React, { useState } from 'react';
import TodoItems from './TodoItems';
import AddForm from './AddForm';
// import list from "./list.json"
import list from './monthList.json';
import { AlsuperItemType } from '../lib/types/alsuperItemType';

export default function App() {
  const [itemList, setItemList] = useState<AlsuperItemType[]>(list);

  function deleteItem(itemId: number) {
    setItemList((itemList) => itemList.filter((rec) => itemId !== rec.itemId));
  }

  const addItem = (userInput: string) => {
    const newValue = {
      name: userInput,
      itemId: Date.now(),
      quantity: 1,
      branch_id: 6,
      unit: 'pza',
      variant: null,
      comment: '',
    }; //! this isn't working we need to take an object and assign it to the newValue variable
    setItemList((itemList) => [newValue, ...itemList]);
  };

  return (
    <div className="container">
      <div className="row mb-1 ms-1 me-1 mt-2">
        <AddForm addItem={addItem}></AddForm>
      </div>
      <div className="row mb-3 ms-1 me-1 mt-3">
        <TodoItems entries={itemList} deleteItem={deleteItem} />
      </div>
    </div>
  );
}
