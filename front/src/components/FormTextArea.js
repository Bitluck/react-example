import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styles from '../styles/components/FormTextArea.scss';

const FormTextArea = props => {
  const { input, label, rows, cols, type, meta: {touched, error, warning} } = props;
  return (
    <div className={styles.formTextArea}>
      <Row>
        <Col>
          <textarea {...input}
          rows={rows}
          cols={cols}
          className={styles.input}
          placeholder={label}
          type={type} />
        </Col>
      </Row>
      <Row className={styles.inlineWarning}>
        <Col>
          { touched &&
          ((error   && <span>{error}</span> ) ||
           (warning && <span>{warning}</span> )) }
        </Col>
      </Row>
    </div>
  );
}

export default FormTextArea;
