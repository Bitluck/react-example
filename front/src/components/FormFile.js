import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styles from '../styles/components/FormFile.scss';

const FormFile = props => {
  const { input, label, name, accept, onChange, autoComplete/*, meta: {touched, error, warning}*/ } = props;

  return (
    <div className={styles.formField}>
        <Row>
          <Col>
            <input {...input}
              name={name}
              type="file"
              className={styles.input}
              placeholder={label}
              onChange={onChange}
              accept={accept}
            />
          </Col>
        </Row>
        <Row className={styles.inlineWarning}>
          <Col>
            { /*touched &&
            ((error   && <span>{error}</span> ) ||
            (warning  && <span>{warning}</span> ))*/ }
          </Col>
          
        </Row>
    </div>
  );
}

export default FormFile;
