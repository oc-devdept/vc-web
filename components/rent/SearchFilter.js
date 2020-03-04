import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

// import CarCategories from "../../data/car-categories.json"
// import CommercialCategories from "../../data/commercial-categories.json"
// import "../../assets/styles/search-filter.css"

class SearchFilter extends Component {
  constructor(props) {
    super(props);

    // const { carCategories } = CarCategories
    // const { commercialCategories } = CommercialCategories

    // this.state = {
    //   type: "cars",
    //   carsCategory: { },
    //   commercialCategory: { }
    // }

    // carCategories.forEach( item => {
    //   this.state.carsCategory[item.catName] = false
    // })
    // commercialCategories.forEach( item => {
    //   this.state.commercialCategory[item.catName] = false
    // })

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(type) {
    // type === "cars" ?
    //   this.setState({type: "cars"}) :
    //   this.setState({type: "commercial"})
    this.props.onTypeChange(type);
  }

  handleChange(event) {
    const { id, checked } = event.target;
    const { type } = this.props;
    this.props.onCategoryChange(type, id, checked);

    // switch (type) {
    // case "cars":
    // this.setState({
    //   carsCategory: {
    //     ...this.state.carsCategory,
    //     [id]: checked
    //   }
    // })
    // this.props.onCategoryChange(id, checked)
    // break
    // case "commercial":
    // this.setState({
    //   commercialCategory: {
    //     ...this.state.commercialCategory,
    //     [id]: checked
    //   }
    // })
    // this.props.onCategoryChange(id, checked)
    // break
    // default:
    // break
    // }
  }

  render() {
    return (
      <div className="search-filter">
        <div className="search-filter-type">
          <Button
            onClick={() => this.handleClick("cars")}
            variant={this.props.type == "cars" ? "primary" : "light"}
          >
            Cars
          </Button>
          <Button
            onClick={() => this.handleClick("commercial")}
            variant={this.props.type == "commercial" ? "primary" : "light"}
          >
            Commercial
          </Button>
        </div>
        <legend>Vehicle Category</legend>
        <div className="search-filter-categories">
          {this.props.type === "cars"
            ? Object.keys(this.props.carsCategory).map((item, id) => (
                <Form.Check
                  custom
                  key={id}
                  id={item}
                  checked={this.props.carsCategory[item]}
                  label={item}
                  onChange={this.handleChange}
                />
              ))
            : Object.keys(this.props.commercialCategory).map((item, id) => (
                <Form.Check
                  custom
                  key={id}
                  id={item}
                  checked={this.props.commercialCategory[item]}
                  label={item}
                  onChange={this.handleChange}
                />
              ))}
        </div>
      </div>
    );
  }
}

export default SearchFilter;
