import React, { useState } from "react";

import SearchFilterMobileModal from "Components/rent/SearchFilterMobileModal";

import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const SearchFilterMobile = ({ state, handleChange }) => {
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleClick = type => {
    switch (type) {
      case "open":
        setShowFilterModal(true);
        break;
      case "close":
        setShowFilterModal(false);
        break;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <div
        className="mobile-filter-toggle"
        style={{
          display: "none",
          position: "fixed",
          left: "50%",
          bottom: "20px",
          transform: "translate(-50%)",
          zIndex: 999
        }}
      >
        <Button onClick={() => handleClick("open")} variant="secondary">
          <FontAwesomeIcon icon={faFilter} /> Filter
        </Button>
      </div>
      <div className="mobile-filter">
        <Modal
          show={showFilterModal}
          onHide={() => handleClick("close")}
          dialogClassName="mobile-filter-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Filter By</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SearchFilterMobileModal
              state={state}
              handleChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button
              onClick={() => handleClick("close")}
              style={{ width: "100%" }}
            >
              Apply
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default SearchFilterMobile;
