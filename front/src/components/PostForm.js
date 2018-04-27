import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormTextArea from './FormTextArea';
import FormField from './FormField';
import FormFile from './FormFile';

import { postPictureChoose } from '../actions/postActions'

import { required, maxLength } from '../utils/validate';

import styles from '../styles/components/PostForm.scss';
import Redirect from 'react-router-dom/Redirect';

class PostForm extends React.Component {
  
  render() {
    const { handleSubmit, handleSubmitForm, dispatch, postStatus, submitting } = this.props;

    return (
      <Grid fluid className={styles.postForm}>
        <form onSubmit={handleSubmit(async values => handleSubmitForm(values))}>
          <Row>
            <Col sm={12} className={styles.error}>
              <span>{postStatus}</span>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Field
                name="postText"
                type="textarea"
                rows={10}
                component={FormTextArea}
                label="Post text"
                validate={[maxLength(2048)]} />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <FormFile
                name="picture"
                label="picture"
                onChange={
                  event => {
                    event.preventDefault();
                    //this.setState({ ...state, files: event.target.files });
                    dispatch(postPictureChoose(event.target.files));
                  }
                }
              accept="image/jpeg, image/png" />
            </Col>
          </Row>
          <Row>
            <Col className={styles.button} sm={12}>
              <button disabled={submitting}>Submit</button>
            </Col>
          </Row>
        </form>
      </Grid>
    );
  }
}

export default reduxForm({
  form: 'postForm',
  destroyOnUnmount: false
})(PostForm);

//export default PostForm;
