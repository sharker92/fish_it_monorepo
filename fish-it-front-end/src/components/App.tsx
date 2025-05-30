'use client';

import React, { useState } from 'react';

import AddForm from './AddForm';
// import list from "./list.json"// TODO: get list by API
import list from './monthList.json'; // TODO: set weekly list
import { AlsuperItemType } from '../types/alsuperItemType';
import ItemsList from './ItemsList';

export default function App() {
  const [itemList, setItemList] = useState<AlsuperItemType[]>(list);

  function deleteItem(itemId: number) {
    setItemList((itemList) => itemList.filter((rec) => itemId !== rec.itemId));
  }

  const addItem = (formData: AlsuperItemType) => {
    console.log(itemList);
    setItemList((itemList) => [formData, ...itemList]);
  };

  return (
    <div className="container mx-auto grid grid-cols-2 gap-4">
      <div className="mt-20">
        <AddForm addItem={addItem}></AddForm>
      </div>
      <div className="">
        <ItemsList entries={itemList} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

