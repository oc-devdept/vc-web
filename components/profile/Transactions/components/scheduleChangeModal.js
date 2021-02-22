import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ScheduleChange = (props) => {
    return (
        <Modal { ...props}
        centered dialogClassName="profileDialog">
            <Modal.Title>
                Change Request sent
            </Modal.Title>
            <Modal.Body>
                <p>Your request has been sent. Our agents will look into rescheduling the appointment you will be notified when there is an update.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={props.onHide}>OK!</Button>                
            </Modal.Footer>
        </Modal>
    )
}
export default ScheduleChange;