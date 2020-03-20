import React, { Component } from "react";
import Select from "react-select";

class SearchSortbar extends Component {
  constructor(props) {
    super(props);
    //   this.state = {
    //     display: "list",
    //     sort: "price-ascending"
    //   };

    //   this.handleClick = this.handleClick.bind(this);
    //   this.handleChange = this.handleChange.bind(this);
    // }

    // handleClick(style) {
    //   style === "list"
    //     ? this.setState({ display: "list" })
    //     : this.setState({ display: "grid" });
    // }

    // handleChange(event) {
    //   this.setState({
    //     ...this.state,
    //     sort: event.target.value
    //   });
  }

  render() {
    const selectOptions = [
      { value: "ascending", label: "Price- Low to High" },
      { value: "descending", label: "Price- High to Low" }
    ];

    const selectStyles = {
      container: styles => ({
        ...styles,
        minWidth: 250,
        display: "inline-block",
        position: "relative"
        // marginLeft: "auto"
      }),
      control: (styles, { isFocused }) => ({
        ...styles,
        border: 0,
        backgroundColor: "#f5f5f5",
        height: "inherit",
        borderColor: "transparent",
        borderRadius: 0,
        boxShadow: "none",
        outline: isFocused ? "#f29d30 solid 1px" : "none"
      }),
      option: (styles, { isFocused }) => ({
        ...styles,
        textAlign: "center",
        backgroundColor: isFocused ? "#4A90E2" : null,
        color: isFocused ? "#ffffff" : null
      }),
      valueContainer: styles => ({
        ...styles,
        display: "flex",
        justifyContent: "center"
      }),
      singleValue: styles => ({
        ...styles,
        color: "#666666"
      }),
      menu: styles => ({
        ...styles,
        borderRadius: 0
      })
    };

    return (
      <div className="col-12 search-sortbar border">
        <div className="row align-items-center" style={{ minHeight: 50 }}>
          <div className="col-4 search-no-of-results mr-auto pl-3">
            <span style={{ color: "#404040", fontWeight: 600 }}>
              Showing {this.props.noOfResults} Results
            </span>
          </div>
          {/* <div className="search-display-style">
            <Button
              onClick={() => this.handleClick("list")}
              style={
                this.state.display == "list"
                  ? {
                      backgroundColor: "#ffffff",
                      borderColor: "#ffffff",
                      color: "#5FAF57"
                    }
                  : {
                      backgroundColor: "#ffffff",
                      borderColor: "#ffffff",
                      color: "#404040"
                    }
              }
            >
              <i className="fas fa-list-ul" />
            </Button>
            <Button
              onClick={() => this.handleClick("grid")}
              style={
                this.state.display == "grid"
                  ? {
                      backgroundColor: "#ffffff",
                      borderColor: "#ffffff",
                      color: "#5FAF57"
                    }
                  : {
                      backgroundColor: "#ffffff",
                      borderColor: "#ffffff",
                      color: "#404040"
                    }
              }
            >
              <i className="fas fa-grip-horizontal" />
            </Button>
          </div> */}
          <div className="col-8 search-sort px-3 d-flex align-items-center justify-content-end">
            {/* <Form.Group controlId="search-sort-select" style={{ margin: 0 }}>
              <Form.Label srOnly="true">Sort by</Form.Label>
              <Form.Control
                as="select"
                style={{
                  height: 30,
                  backgroundColor: "#ffffff",
                  border: "1px solid #dee2e6",
                  paddingLeft: 5,
                  width: "auto",
                  maxWidth: "100%",
                  marginLeft: "auto"
                }}
                value={this.props.state}
                onChange={this.props.handleSortChange}
              >
                <option value="price-ascending">
                  Sort by: Price - Low to High
                </option>
                <option value="price-descending">
                  Sort by: Price - High to Low
                </option>
              </Form.Control>
            </Form.Group> */}
            <Select
              options={selectOptions}
              placeholder="Sort By:"
              styles={selectStyles}
              isSearchable={false}
              onChange={this.props.handleSortChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchSortbar;
