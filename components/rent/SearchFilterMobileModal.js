import React from "react";
import { Form } from "react-bootstrap";

const SearchFilterMobile = ({ state, handleChange }) => {
  return (
    <div className="search-filter-mobile">
      <div className="search-filter-mobile-type">
        <span
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: "#4b6674",
            display: "block",
            marginBottom: "1.5rem"
          }}
        >
          Vehicle Categories
        </span>
        <Form>
          {Object.entries(state).map(([key, value], id) => (
            // <Form.Check
            //   custom
            //   key={id}
            //   id={key}
            //   checked={value}
            //   label={key}
            //   onChange={handleChange}
            //   style={{ fontSize: 20, marginBottom: "1rem"}}
            // />
            <Form.Check custom key={id} style={{ marginBottom: "1rem" }}>
              <Form.Check.Input
                id={key}
                checked={value}
                onChange={handleChange}
              />
              <Form.Check.Label
                htmlFor={key}
                style={{ fontSize: 20, display: "block" }}
              >
                {key}
              </Form.Check.Label>
            </Form.Check>
          ))}
        </Form>
      </div>
    </div>
  );
};

export default SearchFilterMobile;
