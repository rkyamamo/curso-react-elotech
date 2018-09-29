import React from 'react';
import {Form} from 'react-bootstrap';

const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <Form.Group controlId={id} >
      <Form.Label>{label}</Form.Label>
      <Form.Control {...props} />
      {help && <Form.HelpBlock>{help}</Form.HelpBlock>}
    </Form.Group>
  );
}

export default FieldGroup;