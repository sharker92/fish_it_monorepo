import React from 'react';

export function FormInputField(props: any) {
  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={props.name}
          onChange={props.onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label>Item ID:</label>
        <input
          type="number"
          name="itemId"
          value={props.itemId}
          onChange={props.onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={props.quantity}
          onChange={props.onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label>Branch ID:</label>
        <input
          type="number"
          name="branch_id"
          value={props.branch_id}
          onChange={props.onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label>Unit:</label>
        <input
          type="text"
          name="unit"
          value={props.unit}
          onChange={props.onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label>Variant:</label>
        <input
          type="text"
          name="variant"
          value={props.variant}
          onChange={props.onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label>Comment:</label>
        <input
          type="text"
          name="comment"
          value={props.comment}
          onChange={props.onChange}
          placeholder="Enter new task"
        />
      </div>
      <div>
        <label>Unidad:</label>
        <input
          type="number"
          name="unidad"
          value={props.unidad}
          onChange={props.onChange}
          placeholder="Es la unidad por pieza calculada por alsuper"
        />
      </div>
    </div>
    // <input
    //   className="px-2 mt-2 mb-2 ms-1"
    //   value={props.value}
    //   type="text"
    //   onChange={props.onChange}
    //   placeholder="Enter new task"
    // />
  );
}
