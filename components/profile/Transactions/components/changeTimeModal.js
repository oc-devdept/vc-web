import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import DayPicker from "react-day-picker";

const ChangeTime = (props) => {
    return (
        <Modal show={props.show} onHide={props.onHide}
        centered dialogClassName="profileDialog" size="lg">
            <Modal.Title>
                Change Appointment Time Request
            </Modal.Title>
            <Modal.Body>
                <p>Select a new date and time. </p>
                <div class="row">
          <div class="col-12 col-md-6 mb-6">
          <label>Date</label>
                  <input
                    type="text"
                    value={props.currentDate}                   
                    className="form-control"
                    placeholder="Pick your date"
                    id="date"
                    name="date"
                  />
          </div>
          <div class="col-12 col-md-6 mb-6">          
          <label>Timeslot</label>
                    <select className="form-control" value={props.selectedTime} onChange={(evt) => props.handleTimeChange(evt.target.value)}>
                    {props.Timeslot.map((e, index) => {
                        return (
                          <option key={index} value={e}>
                            {e}
                          </option>
                        );
                      })}
                    </select>
                 
          </div>
          <div class="col-12 col-md-6">
          <DayPicker
              selectedDays={[props.selectedDate]}
              style={{ width: "50%" }}
              onDayClick={props.handleDayChange}
              month={new Date()}
              fromMonth={new Date()}
              toMonth={new Date(new Date().setMonth(new Date().getMonth() + 1))}
              disabledDays={[
                {
                  after: new Date(
                    new Date().setMonth(new Date().getMonth() + 1)
                  ),
                  before: new Date()
                }
              ]}
            />
          </div>
          <div class="col-12 col-md-6">
          <label>Reason</label>
          <textarea  rows="4"
            id="reasonText"                               
                    className="form-control"
                    placeholder="Please state a reason for the change"                    
                  >
                    
                  </textarea>
          </div>
          
          </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={props.onHide}>Cancel</Button>
                <Button variant="primary" onClick={()=> props.onConfirm(document.getElementById('reasonText').value)}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ChangeTime;