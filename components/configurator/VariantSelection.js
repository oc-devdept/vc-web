import React, { useState } from "react";
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
  const checkStock = (stockhistory, type) => {
    const stockChecklist = [
      "VAC READY",
      "FINAL INSP",
      "STOCK",
      "PORT",
      "ETA",
      "INCOMING",
      "INDENT"
    ];
    if (type === "tooltip") {
      if (stockhistory.length === 0) {
        return "OUT OF STOCK";
      }

      for (const status of stockChecklist) {
        const result = stockhistory.find(element => element.status === status);
        if (!!result) {
          switch (status) {
            case "VAC READY":
              return "AVAILABLE";
            case "FINAL INSP":
              return "READY IN 0.5 MONTH";
            case "STOCK":
              return "READY IN 0.5-1 MONTH";
            case "PORT":
              return "READY IN 1 MONTH";
            case "ETA":
              return "READY IN 1-1.5 MONTHS";
            case "INCOMING":
              return "READY IN 3 MONTHS";
            case "INDENT":
              return "READY IN 3-6 MONTHS";
            default:
              break;
          }
        }
      }
    } else if (type === "warning") {
      let duration = "";
      if (stockhistory.length === 0) {
        return (
          <p className="mt-auto">
            Your selection is{" "}
            <span style={{ color: "red" }}>not available</span>. It may take at
            least 6 month(s) before delivery.
          </p>
        );
      }
      for (const status of stockChecklist) {
        const result = stockhistory.find(element => element.status === status);
        if (!!result) {
          switch (status) {
            case "VAC READY":
              return;
            case "FINAL INSP":
              duration = "0.5";
              break;
            case "STOCK":
              duration = "0.5-1";
              break;
            case "PORT":
              duration = "1";
              break;
            case "ETA":
              duration = "1-1.5";
              break;
            case "INCOMING":
              duration = "3";
              break;
            case "INDENT":
              duration = "3-6";
              break;
            default:
              break;
          }
          return (
            <p className="mt-auto">
              Your selection will require{" "}
              <span style={{ color: "red" }}>{duration} month(s)</span> before
              delivery
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
              placement="top"
              overlay={
                <Tooltip>{checkStock(item.stockhistory, "tooltip")}</Tooltip>
              }
            >
              <li
                className="configure-list d-inline-block align-top"
                key={id}
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
      {checkStock(stockHistory, "warning")}
    </React.Fragment>
  );
};

export default VariantSelection;
