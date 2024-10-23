import React from 'react';

export function FormInputField(props: any) {
  return (
    <input
      className="px-2 mt-2 mb-2 ms-1"
      value={props.value}
      type="text"
      onChange={props.onChange}
      placeholder="Enter new task"
    />
  );
}
