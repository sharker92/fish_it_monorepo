import React, { useState } from 'react';
import { FormInputField2 } from './FormInputField2';
import { FormInputField } from './FormInputField';
import { FormSubmitButton } from './FormSubmitButton';
import { AlsuperItemType } from '../lib/types/alsuperItemType';

const AddForm = ({ addItem }: { addItem: any }) => {
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
  const [formData, setFormData] = useState(EMPTY_CART_ITEM);

  const handleChange = (e: any) => {
    console.log('userInputHC1', formData)
    console.log(e)
    console.log(e.target)
    setFormData(e.currentTarget.value);
    const { name, value } = e.target;
    console.log('-----')
    setFormData(name);
    console.log('-----')
    setFormData(value);
    console.log('userInputHC2', formData)
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: any) => {
    console.log('AHA!')
    e.preventDefault();
    if (true) { //todo protect addItem if it doesn't have all required elements
      console.log('AHA!2')
      console.log(formData)
      addItem(formData);
    }
    setFormData(EMPTY_CART_ITEM);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-7">
          <FormInputField userInput={formData} onChange={handleChange} />
          {/* <FormInputField2 value={formData} onChange={handleChange} /> */}
        </div>

        <div className="col-5">
          <FormSubmitButton />
        </div>
      </div>
    </form>
  );
};

export default AddForm;
