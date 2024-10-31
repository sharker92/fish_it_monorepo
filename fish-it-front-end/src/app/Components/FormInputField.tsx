import React from 'react';

export function FormInputField({userInput, onChange}: any) {
  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={userInput.name}
          onChange={onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label>Item ID:</label>
        <input
          type="number"
          name="itemId"
          value={userInput.itemId}
          onChange={onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={userInput.quantity}
          onChange={onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label>Branch ID:</label>
        <input
          type="number"
          name="branch_id"
          value={userInput.branch_id}
          onChange={onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label>Unit:</label>
        <input
          type="text"
          name="unit"
          value={userInput.unit}
          onChange={onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label>Variant:</label>
        <input
          type="text"
          name="variant"
          value={userInput.variant}
          onChange={onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label>Comment:</label>
        <input
          type="text"
          name="comment"
          value={userInput.comment}
          onChange={onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label>Unidad:</label>
        <input
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
