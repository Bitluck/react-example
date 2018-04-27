import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import PostForm from '../components/PostForm';
import { postCreateRequest, postGetRequest } from '../actions/postActions';

const mapStateToProps = (state) => {
  return {
    postStatus: '',
    files: state.post.files,
    loggedIn: true
  }
}

/*const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitForm: (formData) => {
      console.log({ formData });
      dispatch(postCreateRequest(formData));
    },
    onChangeFile: (event) => {

    }
  }
}*/

const mergeProps = (props, dispatchProps) => {
  return {
    handleSubmitForm: (formData) => {
      dispatchProps.dispatch(postCreateRequest({ text: formData, picture: props.files[0] || null }));
    },
    onChangeFile: (event) => {

    }
  }
}

const PostFormConnected = connect(mapStateToProps, /*mapDispatchToProps*/ null, mergeProps)(PostForm);

/*const PostFormConnected = reduxForm({
  form: 'postForm',
  destroyOnUnmount: false
})(PostFormContainer);*/

export default PostFormConnected;
