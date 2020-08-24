import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

  renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      );
    }

  }

  renderInput = ({ input, label, meta }) => {
    const fiedlClassName = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={fiedlClassName} >
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => { // fromValues are passed by redux-form
    this.props.onSubmit(formValues);
  }

  render () {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Stream Title" />
        <Field name="description" component={this.renderInput} label="Enter Stream Description" />
        <button className="ui button primary" >Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {

  const errors = {};
  if (!formValues.title) {
    errors.title = 'You Must Enter A Stream Title.';
  }

  if (!formValues.description) {
    errors.description = 'You Must Enter A Stream Description.';
  }

  return errors;
}

export default reduxForm({ form: 'stream_form', validate })(StreamForm);