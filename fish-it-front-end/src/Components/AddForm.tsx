import React, { useState } from 'react';
import { FormInputField2 } from './FormInputField2';
import { FormInputField } from './FormInputField';
import { FormSubmitButton } from './FormSubmitButton';
import { AlsuperItemType } from '../app/lib/types/alsuperItemType';

const AddForm = ({ addTask }: { addTask: any }) => {
  const EMPTY_CART_ITEM: AlsuperItemType = {
    name: '',
    itemId: 0,
    quantity: 0,
    branch_id: 6,
    unit: '',
    variant: '', //
    comment: '', //
    unidad: 0,  //
  };
  const [userInput, setUserInput] = useState(EMPTY_CART_ITEM);

  const handleChange = (e: any) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (userInput.name) {
      addTask(userInput);
    }
    setUserInput(EMPTY_CART_ITEM);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-7">
          <FormInputField value={userInput} onChange={handleChange} />
          {/* <FormInputField2 value={userInput} onChange={handleChange} /> */}
        </div>

        <div className="col-5">
          <FormSubmitButton />
        </div>
      </div>
    </form>
  );
};

export default AddForm;
