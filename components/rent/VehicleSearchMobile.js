import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import VehicleSearch from "Components/rent/VehicleSearch";

const VehicleSearchMobile = ({ getSearch, searchParameters }) => {
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <React.Fragment>
      <div className="row search-mobile-details">
        <div className="col-9">
          <span style={{ color: "#4b6674", fontWeight: 600 }}>
            33 Ubi Ave, #01-47/48
          </span>
          <br />
          <span
            style={{ color: "#4b6674", fontWeight: 500 }}
          >{`${searchParameters.pickUpDate}, ${searchParameters.pickUpTime} - ${searchParameters.dropOffDate}, ${searchParameters.dropOffTime}`}</span>
        </div>
        <div className="col-3 d-flex justify-content-center align-items-center">
          <Button onClick={() => setShowSearchModal(true)}>
            <i className="far fa-edit" />
          </Button>
        </div>
      </div>
      <div className="search-mobile">
        <Modal
          show={showSearchModal}
          onHide={() => setShowSearchModal(false)}
          dialogClassName="search-mobile-modal"
        >
          <Modal.Header
            style={{
              backgroundColor: "#4b6674",
              color: "#ffffff",
              borderRadius: 0
            }}
            closeButton
          >
            <Modal.Title style={{ fontSize: 16 }}>
              <span>33 Ubi Ave, #01-47/48</span>
              <br />
              <span>{`${searchParameters.pickUpDate}, ${searchParameters.pickUpTime} - ${searchParameters.dropOffDate}, ${searchParameters.dropOffTime}`}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <VehicleSearch getSearch={getSearch} mobile={true} />
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => setShowSearchModal(false)}
              variant="light"
              style={{ width: "50%" }}
            >
              Close
            </Button>
            <Button
              onClick={() => setShowSearchModal(false)}
              style={{ width: "50%" }}
              type="submit"
              form="vehicle-search-mobile"
              value="search"
            >
              Search
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default VehicleSearchMobile;
