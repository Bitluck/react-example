import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styles from '../styles/components/FormField.scss';

const FormField = props => {
  const { input, label, type, autoComplete, meta: {touched, error, warning} } = props;

  return (
    <div className={styles.formField}>
        <Row>
          <Col sm={4}>
            <label>{label}</label>
          </Col>
          <Col sm={8}>
            <input {...input}
            className={styles['inp']}
            placeholder={label}
            type={type}
            autoComplete={autoComplete}/>
          </Col>
        </Row>
        <Row className={styles.inl}>
          <Col sm={8} smOffset={4}>
            { touched &&
            ((error   && <span>{error}</span> ) ||
            (warning  && <span>{warning}</span> )) }
          </Col>
        </Row>
    </div>
  );
}

export default FormField;
