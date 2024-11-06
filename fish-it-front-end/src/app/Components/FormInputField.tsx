import React from 'react';
import { capitalizeFirstLetter } from '../helpers/tools';

export function FormInputField({ formData, onChange }: any) {
  const formDataMetaData = [
    { id: 'name', type: 'text', placeholder: 'Enter new task' },
    { id: 'itemId', type: 'number', placeholder: 'Enter new task' },
    { id: 'quantity', type: 'number', placeholder: 'Enter new task' },
    { id: 'branch_id', type: 'number', placeholder: 'Enter new task' },
    { id: 'unit', type: 'text', placeholder: 'Enter new task' },
    { id: 'variant', type: 'text', placeholder: 'Enter new task' },
    { id: 'comment', type: 'text', placeholder: 'Enter new task' },
    {
      id: 'unidad',
      type: 'number',
      placeholder: 'Es la unidad por pieza calculada por alsuper',
    },
  ];
  return (
    <>
      {formDataMetaData.map((metaData) => (
        <div>
          <label htmlFor={metaData.id}>
            {capitalizeFirstLetter(metaData.id)}:
          </label>
          <input
            key={metaData.id}
            id={metaData.id}
            type={metaData.type}
            name={metaData.id}
            value={formData[metaData.id]}
            onChange={onChange}
            placeholder={metaData.placeholder}
          />
        </div>
      ))}
    </>
    // <input
    //   className="px-2 mt-2 mb-2 ms-1"
    //   value={value}
    //   type="text"
    //   onChange={onChange}
    //   placeholder="Enter new task"
    // />
  );
}
