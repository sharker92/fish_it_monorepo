'use client'

import React, { useState } from 'react';

import AddForm from './AddForm';
// import list from "./list.json"
import list from './monthList.json';
import { AlsuperItemType } from '../lib/types/alsuperItemType';
import ItemsList from './ItemsList';

export default function App() {
  const [itemList, setItemList] = useState<AlsuperItemType[]>(list);

  function deleteItem(itemId: number) {
    setItemList((itemList) => itemList.filter((rec) => itemId !== rec.itemId));
  }

  const addItem = (formData: AlsuperItemType) => {
    // const newValue = { //!!HERE 04/11/2024
    //   name: userInput,
    //   itemId: Date.now(),
    //   quantity: 1,
    //   branch_id: 6,
    //   unit: 'pza',
    //   variant: null,
    //   comment: '',
    // }; //! this isn't working we need to take an object and assign it to the newValue variable
    setItemList((itemList) => [formData, ...itemList]);
  };

  return (
    <div className="container">
      <div className="row mb-1 ms-1 me-1 mt-2">
        <AddForm addItem={addItem}></AddForm>
      </div>
      <div className="row mb-3 ms-1 me-1 mt-3">
        <ItemsList entries={itemList} deleteItem={deleteItem} />
      </div>
    </div>
  );
}
