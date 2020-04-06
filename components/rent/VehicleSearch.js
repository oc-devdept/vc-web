import React, { Component } from "react";
import Router from "next/router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import DayPickerInput from "react-day-picker/DayPickerInput";

import Select from "react-select";

class VehicleSearch extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isSaturdayPickUp: false,
    //   isSaturdayDropoff: false
    // };

    // Set default dates
    const dateNow = new Date();
    var dateStart = new Date(dateNow);
    var dateEnd = new Date(dateNow);
    var dateLimit = new Date(dateNow);
    dateStart.setDate(dateStart.getDate() + 3);
    dateEnd.setDate(dateEnd.getDate() + 4);
    dateLimit.setMonth(dateLimit.getMonth() + 2);

    this.state = {
      dateStart: dateStart,
      dateEnd: dateEnd,
      dateLimit: dateLimit,
    };

    // Check if search parameters exist, else generate general search parameters
    if (Object.keys(this.props.searchParameters).length !== 0) {
      this.state = {
        ...this.state,
        pickUpDate: this.props.searchParameters.pickUpDate,
        pickUpTime: this.props.searchParameters.pickUpTime,
        dropOffDate: this.props.searchParameters.dropOffDate,
        dropOffTime: this.props.searchParameters.dropOffTime,
      };
    } else {
      this.state = {
        ...this.state,
        pickUpDate: dateStart,
        pickUpTime: "09:00",
        dropOffDate: dateEnd,
        dropOffTime: "09:00",
      };
    }

    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    // this.listOfTimings = this.listOfTimings.bind(this);
  }

  // handleDayChange = (date, modifiers, input) => {
  //   const { id } = input.input;
  //   const dayOfTheWeek = new Date(date).getDay();
  //   const isSaturday = dayOfTheWeek === 6 ? true : false;

  //   switch (id) {
  //     case "pick-up":
  //       this.setState({
  //         isSaturdayPickUp: isSaturday
  //       });
  //       break;
  //     case "drop-off":
  //       this.setState({
  //         isSaturdayDropoff: isSaturday
  //       });
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // KIV: format date output if necessary
  handleDayChange(day, modifiers, input) {
    const { id } = input.input;
    switch (id) {
      case "pick-up":
        let dateEnd = new Date(day);
        dateEnd.setDate(dateEnd.getDate() + 1);
        this.setState({
          ...this.state,
          dateEnd: dateEnd,
          pickUpDate: day,
        });
        break;
      case "drop-off":
        this.setState({
          ...this.state,
          dropOffDate: day,
        });
        break;
      default:
        break;
    }
  }

  componentDidUpdate() {
    // if selected pick up date is later than drop off date,
    // change it to stipulated default end date
    if (this.state.pickUpDate >= this.state.dropOffDate) {
      const { dateEnd } = this.state;
      this.setState({
        ...this.state,
        dropOffDate: dateEnd,
      });
    }
  }

  // handleTimeChange(event) {
  //   const { id, value } = event.target;
  //   this.setState({
  //     ...this.state,
  //     [id]: value
  //   });
  // }

  handleTimeChange(id, value) {
    switch (id) {
      case "pickUpTime":
        this.setState({
          ...this.state,
          pickUpTime: value.value,
        });
        break;
      case "dropOffTime":
        this.setState({
          ...this.state,
          dropOffTime: value.value,
        });
        break;
      default:
        break;
    }
  }

  // listOfTimings() {
  //   const saturdayTimings = ["08:00", "09:00", "10:00"];

  //   const restOfTheWeekTimings = [
  //     "09:00",
  //     "10:00",
  //     "11:00",
  //     "12:00",
  //     "13:00",
  //     "14:00",
  //     "15:00",
  //     "16:00",
  //     "17:00"
  //   ];

  //   return isSaturday
  //     ? saturdayTimings.map((item, id) => <option key={id}>{item}</option>)
  //     : restOfTheWeekTimings.map((item, id) => (
  //         <option key={id}>{item}</option>
  //       ));

  //   return restOfTheWeekTimings.map((item, id) => (
  //     <option key={id}>{item}</option>
  //   ));
  // }

  // publicHolidays() {
  //   const year = 2020;
  //   // Jan = 0, Feb = 1, ... Dec = 11
  //   // https://www.mom.gov.sg/newsroom/press-releases/2019/0408-public-holidays-for-2020
  //   const dates = [
  //     { month: 0, day: 1 },
  //     { month: 0, day: 25 },
  //     { month: 0, day: 26 },
  //     { month: 0, day: 27 },
  //     { month: 3, day: 10 },
  //     { month: 4, day: 1 },
  //     { month: 4, day: 7 },
  //     { month: 4, day: 24 },
  //     { month: 4, day: 25 },
  //     { month: 6, day: 31 },
  //     { month: 7, day: 9 },
  //     { month: 7, day: 10 },
  //     { month: 10, day: 14 },
  //     { month: 11, day: 25 }
  //   ];

  //   return dates.map(date => new Date(year, date.month, date.day));
  // }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.getSearch(this.state);
    Router.push("/rent/results");
  };

  render() {
    const inputField = [
      {
        controlId: "pick-up",
        formLabel: "Pick-up Date:",
        timeId: "pickUpTime",
        dateId: "pickUpDate",
        disabledBefore: "dateStart",
      },
      {
        controlId: "drop-off",
        formLabel: "Drop-off Date:",
        timeId: "dropOffTime",
        dateId: "dropOffDate",
        disabledBefore: "dateEnd",
      },
    ];

    const selectOptions = [
      { value: "09:00", label: "09:00" },
      { value: "10:00", label: "10:00" },
      { value: "11:00", label: "11:00" },
      { value: "12:00", label: "12:00" },
      { value: "13:00", label: "13:00" },
      { value: "14:00", label: "14:00" },
      { value: "15:00", label: "15:00" },
      { value: "16:00", label: "16:00" },
      { value: "17:00", label: "17:00" },
    ];

    const selectStyles = {
      container: (styles) => ({
        ...styles,
        width: "49%",
        height: 45,
        display: "inline-block",
        position: "absolute",
      }),
      control: (styles, { isFocused }) => ({
        ...styles,
        border: 0,
        backgroundColor: "#f5f5f5",
        height: "inherit",
        borderColor: "transparent",
        borderRadius: 0,
        boxShadow: "none",
        outline: isFocused ? "#f29d30 solid 1px" : "none",
      }),
      option: (styles, { isFocused }) => ({
        ...styles,
        textAlign: "center",
        backgroundColor: isFocused ? "#4A90E2" : null,
        color: isFocused ? "#ffffff" : null,
      }),
      valueContainer: (styles) => ({
        ...styles,
        display: "flex",
        justifyContent: "center",
      }),
      singleValue: (styles) => ({
        ...styles,
        color: "#666666",
      }),
      menu: (styles) => ({
        ...styles,
        borderRadius: 0,
      }),
    };

    // console.log("state= ", this.state);
    return (
      <div className="search">
        <Form
          className="my-3"
          onSubmit={this.onFormSubmit}
          id={
            this.props.mobile === true
              ? "vehicle-search-mobile"
              : "vehicle-search"
          }
        >
          <Form.Row>
            <Col md={12} lg={true}>
              <Form.Group controlId="location">
                <Form.Label>Pick-up / Drop-off Location:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="33 Ubi Ave 3, #01-47/48"
                  disabled={true}
                  style={{
                    backgroundColor: "#d8d8d8",
                  }}
                />
              </Form.Group>
            </Col>
            {inputField.map((item, id) => (
              <Col md={6} lg={true} key={id}>
                <Form.Group controlId={item.controlId}>
                  <Form.Label>{item.formLabel}</Form.Label>
                  <br />
                  <DayPickerInput
                    dayPickerProps={{
                      disabledDays: [
                        // { daysOfWeek: [0] },
                        { before: this.state[item.disabledBefore] },
                        { after: this.state.dateLimit },
                        // ...this.publicHolidays()
                      ],
                      fromMonth: this.state.dateStart,
                      toMonth: this.state.dateLimit,
                    }}
                    inputProps={{
                      id: item.controlId,
                      readOnly: true,
                      style: {
                        height: "100%",
                        width: "100%",
                        padding: 0,
                        border: "none",
                        // borderLeft: "1px solid #c5c5c5",
                        borderRight: "1px solid #c5c5c5",
                        backgroundColor: "#f5f5f5",
                        textAlignLast: "center",
                        color: "#666666",
                      },
                    }}
                    style={{
                      width: "50%",
                      height: 45,
                    }}
                    value={this.state[item.dateId]}
                    // value={
                    //   !!this.props.searchParameters
                    //     ? this.props.searchParameters[item.dateId]
                    //     : this.state[item.dateId]
                    // }
                    onDayChange={this.handleDayChange}
                  />
                  {/* <Form.Control
                      as="select"
                      id={item.timeId}
                      style={{
                        padding: 0,
                        textAlignLast: "center"
                      }}
                      value={this.state[item.timeId]}
                      // value={
                      //   !!this.props.searchParameters
                      //     ? this.props.searchParameters[item.timeId]
                      //     : this.state[item.timeId]
                      // }
                      onChange={this.handleTimeChange}
                    > */}
                  {/* item.timeId is either pick-up-time or drop-off-time */}
                  {/* {item.timeId === "pick-up-time"
                        ? this.listOfTimings(this.state.isSaturdayPickUp)
                        : this.listOfTimings(this.state.isSaturdayDropoff)} */}
                  {/* {this.listOfTimings()}
                    </Form.Control> */}
                  <Select
                    options={selectOptions}
                    defaultValue={selectOptions[0]}
                    styles={selectStyles}
                    isSearchable={false}
                    id={item.timeId}
                    onChange={(value) =>
                      this.handleTimeChange(item.timeId, value)
                    }
                  />
                  {/* </InputGroup> */}
                </Form.Group>
              </Col>
            ))}
            <Col lg={2} md={12} className="align-self-end search-submit">
              <Form.Group>
                <Button
                  type="submit"
                  style={{
                    fontSize: 16,
                    width: "100%",
                  }}
                >
                  Search
                </Button>
              </Form.Group>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default VehicleSearch;
