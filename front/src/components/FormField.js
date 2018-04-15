import React from 'react';

const FormField = props => {
  const { input, label, type, meta: {touched, error, warning} } = props;

  return (
    <div>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type} />
      { touched   &&
        ((error   && <span>{error}</span> ) ||
         (warning && <span>{warning}</span> )) }
    </div>
  );
}

export default FormField;
