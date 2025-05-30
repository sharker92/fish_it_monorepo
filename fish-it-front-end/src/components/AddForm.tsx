import React, { useState } from 'react';
import { FormInputField } from './FormInputField';
import { FormSubmitButton } from './FormSubmitButton';
import { AlsuperItemType } from '../types/alsuperItemType';

const AddForm = ({ addItem }: { addItem: any }) => {
  const EMPTY_CART_ITEM: AlsuperItemType = {
    name: '',
    itemId: 0,
    quantity: 0,
    branch_id: 6,
    unit: '',
    variant: '', // optional
    comment: '', //
    unidad: 0, //
  };
  const [formData, setFormData] = useState(EMPTY_CART_ITEM);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    console.log('userInputHC2', formData);
  };

  const handleSubmit = (e: any) => {
    console.log('AHA!');
    e.preventDefault();
    if (true) {
      // TODO: protect addItem if it doesn't have all required elements
      console.log('AHA!2');
      console.log(formData);
      addItem(formData);
    }
    setFormData(EMPTY_CART_ITEM);
  };
  // TODO: align button
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <FormInputField formData={formData} onChange={handleChange} />
        </div>

        <div className="ml-20">
          <FormSubmitButton />
        </div>
      </div>
    </form>
  );
};

export default AddForm;

