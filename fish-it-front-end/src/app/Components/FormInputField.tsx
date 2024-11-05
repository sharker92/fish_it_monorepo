import React from 'react';

export function FormInputField({ userInput, onChange }: any) {
  return (
    <div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={userInput.name}
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
          value={userInput.itemId}
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
          value={userInput.quantity}
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
          value={userInput.branch_id}
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
          value={userInput.unit}
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
          value={userInput.variant}
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
          value={userInput.comment}
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
          value={userInput.unidad}
          onChange={onChange}
          placeholder="Es la unidad por pieza calculada por alsuper"
        />
      </div>
    </div>
    // <input
    //   className="px-2 mt-2 mb-2 ms-1"
    //   value={value}
    //   type="text"
    //   onChange={onChange}
    //   placeholder="Enter new task"
    // />
  );
}
