import React from 'react';

const FormSelect = props => {
  const { input, list, label, autoComplete, meta: { touched, error } } = props;

  return (
    <div>
      <label>{label}</label>
      <select {...input} autoComplete={autoComplete}>
        <option value="">Select from list...</option>
        {list.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  )
}

export default FormSelect;
