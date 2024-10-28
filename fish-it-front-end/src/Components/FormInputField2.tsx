import React from 'react';

export function FormInputField2(props: any) {
  return (
    <input
      className="px-2 mt-2 mb-2 ms-1"
      value={props.value}
      type="text"
      onChange={props.onChange}
      placeholder="Enter old new task"
    />
  );
}
