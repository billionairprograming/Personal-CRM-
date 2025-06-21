import React from "react";

const InputField = ({ title, type, value, onChange }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{title}</legend>
      <input
        type={type}
        className="input"
        placeholder="Type here"
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
};

export default InputField;

{
  /*This is used when some form of data needs to be added. */
}
