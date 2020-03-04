import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import VehicleSearch from "Components/rent/VehicleSearch";

const VehicleSearchMobile = props => {
  const [tempDateTime, setTempDateTime] = useState({
    pickUpDate: "1st Jan 2020",
    pickUpTime: "10:00",
    dropOffDate: "3rd Jan 2020",
    dropOffTime: "10:00"
  });
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <>
      <div className="search-mobile-details">
        <div className="col-10">
          <p>363 Sembawang Road Goodlink Park</p>
          <p>{`${tempDateTime.pickUpDate}, ${tempDateTime.pickUpTime} - ${tempDateTime.dropOffDate}, ${tempDateTime.dropOffTime}`}</p>
        </div>
        <div
          className="col-2 d-flex justify-content-center align-items-center"
          onClick={() => setShowSearchModal(true)}
        >
          <i className="far fa-edit" />
        </div>
      </div>
      <div className="search-mobile">
        <Modal
          show={showSearchModal}
          onHide={() => setShowSearchModal(false)}
          dialogClassName="search-mobile-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <p>363 Sembawang Road Goodlink Park</p>
              <p>{`${tempDateTime.pickUpDate}, ${tempDateTime.pickUpTime} - ${tempDateTime.dropOffDate}, ${tempDateTime.dropOffTime}`}</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <VehicleSearch />
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => setShowSearchModal(false)}
              variant="outline-secondary"
            >
              Close
            </Button>
            <Button onClick={() => setShowSearchModal(false)}>Search</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default VehicleSearchMobile;
