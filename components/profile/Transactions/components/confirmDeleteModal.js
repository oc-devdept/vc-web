import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmDelete = (props) => {
    return (
        <Modal { ...props}
        centered dialogClassName="profileDialog">
            <Modal.Title>
                Cancel Appointment
            </Modal.Title>
            <Modal.Body>
                <p>Are you sure you want to cancel appointment?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={props.onHide}>Cancel</Button>
                <Button variant="primary" onClick={props.onConfirm}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ConfirmDelete;