import React from 'react';

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

      {/* <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label htmlFor="itemId">Item ID:</label>
        <input
          id="itemId"
          type="number"
          name="itemId"
          value={formData.itemId}
          onChange={onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label htmlFor="branch_id">Branch ID:</label>
        <input
          id="branch_id"
          type="number"
          name="branch_id"
          value={formData.branch_id}
          onChange={onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label htmlFor="unit">Unit:</label>
        <input
          id="unit"
          type="text"
          name="unit"
          value={formData.unit}
          onChange={onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label htmlFor="variant">Variant:</label>
        <input
          id="variant"
          type="text"
          name="variant"
          value={formData.variant}
          onChange={onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <input
          id="comment"
          type="text"
          name="comment"
          value={formData.comment}
          onChange={onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label htmlFor="unidad">Unidad:</label>
        <input
          id="unidad"
          type="number"
          name="unidad"
          value={formData.unidad}
          onChange={onChange}
          placeholder="Es la unidad por pieza calculada por alsuper"
        />
      </div> */}
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

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
