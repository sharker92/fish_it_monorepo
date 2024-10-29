import React, { useState } from 'react';
import TodoItems from './TodoItems';
import AddForm from './AddForm';
// import list from "./list.json"
import list from './monthList.json';
import { AlsuperItemType } from '../lib/types/alsuperItemType';

export default function App() {
  const [toDoList, setToDoList] = useState<AlsuperItemType[]>(list);

  function deleteItem(itemId: number) {
    setToDoList((toDoList) => toDoList.filter((rec) => itemId !== rec.itemId));
  }

  const addTask = (userInput: string) => {
    const newValue = {
      name: userInput,
      itemId: Date.now(),
      quantity: 1,
      branch_id: 6,
      unit: 'pza',
      variant: null,
      comment: '',
    };
    setToDoList((toDoList) => [newValue, ...toDoList]);
  };

  return (
    <div className="container">
      <div className="row mb-1 ms-1 me-1 mt-2">
        <AddForm addTask={addTask}></AddForm>
      </div>
      <div className="row mb-3 ms-1 me-1 mt-3">
        <TodoItems entries={toDoList} deleteItem={deleteItem} />
      </div>
    </div>
  );
}
