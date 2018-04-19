import React from 'react';

const FormField = props => {
  const { input, label, type, autoComplete, meta: {touched, error, warning} } = props;

  return (
    <div>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type} autoComplete={autoComplete}/>
      { touched   &&
        ((error   && <span>{error}</span> ) ||
         (warning && <span>{warning}</span> )) }
    </div>
  );
}

export default FormField;
