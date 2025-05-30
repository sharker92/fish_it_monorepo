import React from 'react';
import { capitalizeFirstLetter } from '../utils/tools';

export function FormInputField({ formData, onChange }: any) {
  const formDataMetaData = [
    { id: 'name', type: 'text', placeholder: 'Enter product name' },
    { id: 'itemId', type: 'number', placeholder: 'Enter product ID' },
    { id: 'quantity', type: 'number', placeholder: 'Enter product quantity' },
    { id: 'branch_id', type: 'number', placeholder: 'Enter product branch ID' },
    { id: 'unit', type: 'text', placeholder: 'Enter product unit' },
    { id: 'variant', type: 'text', placeholder: 'Enter product variant' },
    { id: 'comment', type: 'text', placeholder: 'Enter product comment' },
    {
      id: 'unidad',
      type: 'number',
      placeholder: 'Enter unit per piece value by Alsuper',
    },
  ];
  // TODO: bold at names and separate in y a little bit
  return (
    <>
      {formDataMetaData.map((metaData) => (
        <div className="flex items-center space-x-6">
          <label htmlFor={metaData.id} className="w-16">
            {capitalizeFirstLetter(metaData.id)}:{' '}
          </label>{' '}
          <input
            key={metaData.id}
            id={metaData.id}
            type={metaData.type}
            name={metaData.id}
            value={formData[metaData.id]}
            onChange={onChange}
            placeholder={metaData.placeholder}
            className="w-64"
          />
        </div>
      ))}
    </>
  );
}

