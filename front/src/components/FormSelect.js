import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styles from '../styles/components/FormSelect.scss';

const FormSelect = props => {
  const { input, list, label, autoComplete, meta: { touched, error } } = props;

  return (
    <div className={styles.formSelect}>
      <Row>
        <Col sm={4}>
          <label>{label}</label>
        </Col>
        <Col sm={8}>
          <select {...input} className={styles.input} autoComplete={autoComplete}>
          <option value="">Select from list...</option>
          {list.map(val => (
            <option value={val} key={val}>
              {val}
            </option>
          ))}
        </select>
        </Col>
      </Row>
      <Row className={styles.inlineWarning}>
        <Col sm={8} smOffset={4}>
          {touched && error && <span>{error}</span>}
        </Col>
      </Row>
    </div>
  )
}

export default FormSelect;
