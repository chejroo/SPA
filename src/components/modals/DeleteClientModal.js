import React from 'react'
import { Modal, Button } from "react-bootstrap";


export default (props) => {
  return (
      <Modal show={props.show} >
          <Modal.Body>
            {props.body}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick = {props.onCancel}> {props.cancelButtonText || 'Anuluj'}</Button>
            <Button bsStyle="danger" onClick = {props.onSubmitDelete}> {props.deleteButtonText || 'Usuń'}</Button>
          </Modal.Footer>
      </Modal>
  );
};
