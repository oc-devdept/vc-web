import React from "react";
import { formatPrice } from "Components/Helpers/helpers";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const VariantSelection = ({
  title,
  objects,
  handleOptionChange,
  selectedId,
  stockHistory
}) => {
  // consider moving this to Helpers and add a type=reducer
  const checkTooltip = stockhistory => {
    const stockChecklist = [
      "VAC READY",
      "FINAL INSP",
      "STOCK",
      "PORT",
      "ETA",
      "INCOMING",
      "INDENT"
    ];

    if (stockhistory.length === 0) {
      return "PRE-ORDER";
    }
    for (const status of stockChecklist) {
      const result = stockhistory.find(
        element => element.status === status && element.stock_count !== 0
      );
      if (!!result) {
        if (status === "VAC READY") {
          return "VAC READY STOCK";
        } else if (status === "FINAL INSP" || status === "STOCK") {
          return "READY STOCK";
        } else if (
          status === "PORT" ||
          status === "ETA" ||
          status === "INCOMING"
        ) {
          return "INCOMING STOCK";
        } else {
          return "PRE-ORDER";
        }
      }
    }
  };

  const checkWarning = stockhistory => {
    const stockChecklist = [
      "VAC READY",
      "FINAL INSP",
      "STOCK",
      "PORT",
      "ETA",
      "INCOMING",
      "INDENT"
    ];
    if (stockhistory.length === 0) {
      return (
        <p className="mt-auto">
          This option is currently on indent basis. Expected arrival time of{" "}
          <span style={{ color: "red" }}>3-6 months</span>.
        </p>
      );
    }
    for (const status of stockChecklist) {
      const result = stockhistory.find(
        element => element.status === status && element.stock_count !== 0
      );
      if (!!result) {
        if (status === "VAC READY") {
          return (
            <p className="mt-auto">VAC Ready Stock. Immediate availability.</p>
          );
        } else if (status === "FINAL INSP" || status === "STOCK") {
          return (
            <p className="mt-auto">
              Ready Stock. Expected waiting time of{" "}
              <span style={{ color: "red" }}>2-4 weeks</span>.
            </p>
          );
        } else if (
          status === "PORT" ||
          status === "ETA" ||
          status === "INCOMING"
        ) {
          return (
            <p className="mt-auto">
              Stock is incoming. Expected arrival time of{" "}
              <span style={{ color: "red" }}>1-3 months</span>.
            </p>
          );
        } else {
          return (
            <p className="mt-auto">
              This option is currently on indent basis. Expected arrival time of{" "}
              <span style={{ color: "red" }}>3-6 months</span>.
            </p>
          );
        }
      }
    }
  };

  return (
    <React.Fragment>
      <h3 className="configure-opt-title">{title}</h3>
      <ul className="list-unstyled">
        {!!objects &&
          objects.map((item, id) => (
            <OverlayTrigger
              key={id}
              placement="top"
              overlay={<Tooltip>{checkTooltip(item.stockhistory)}</Tooltip>}
            >
              <li
                className="configure-list d-inline-block align-top"
                id={item.id}
                onClick={handleOptionChange}
                style={{ maxWidth: 120 }}
              >
                <img
                  src={item.files[0].path}
                  alt={item.name}
                  id={item.id}
                  style={
                    item.id == selectedId
                      ? {
                          border: "2px solid #F29D30",
                          color: "#F29D30",
                          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                          fontWeight: "bold"
                        }
                      : { border: "1px solid #DEE2E6" }
                  }
                />
                <br />
                <span
                  id={item.id}
                  style={{ textTransform: "uppercase", fontWeight: 500 }}
                >
                  {item.name}
                </span>
                <br />
                <span id={item.id} style={{ color: "#4B6674" }}>
                  {formatPrice(item.price)}
                </span>
              </li>
            </OverlayTrigger>
          ))}
      </ul>
      {checkWarning(stockHistory)}
    </React.Fragment>
  );
};

export default VariantSelection;
