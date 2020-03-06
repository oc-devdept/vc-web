import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import VehicleSearch from "Components/rent/VehicleSearch";

const VehicleSearchMobile = ({ getSearch, searchParameters }) => {
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <React.Fragment>
      <div className="search-mobile-details">
        <div className="col-10">
          <span>33 Ubi Ave, #01-47/48</span>
          <span>{`${searchParameters.pickUpDate}, ${searchParameters.pickUpTime} - ${searchParameters.dropOffDate}, ${searchParameters.dropOffTime}`}</span>
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
              <span>33 Ubi Ave, #01-47/48</span>
              <span>{`${searchParameters.pickUpDate}, ${searchParameters.pickUpTime} - ${searchParameters.dropOffDate}, ${searchParameters.dropOffTime}`}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <VehicleSearch getSearch={getSearch} />
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
    </React.Fragment>
  );
};

export default VehicleSearchMobile;
