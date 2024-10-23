import React, { useState } from "react";
import {FormInputField} from "./FormInputField";
import {FormSubmitButton} from "./FormSubmitButton";

const AddForm = ({ addTask }: { addTask: any}) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e: any) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (userInput.length > 0) {
      addTask(userInput);
    }
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-7">
          <FormInputField value={userInput} onChange={handleChange} />
        </div>

        <div className="col-5">
          <FormSubmitButton />
        </div>
      </div>
    </form>
  );
};

export default AddForm;
