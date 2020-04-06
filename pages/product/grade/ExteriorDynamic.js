import React, { Component } from "react";

import VariantSelection from "Components/configurator/VariantSelection";
import VariantInfo from "Components/configurator/VariantInfo";
import { selectedStockId } from "Components/Helpers/helpers";

class ExteriorDynamic extends Component {
  constructor(props) {
    super(props);

    if (!!this.props.ProductExterior.selected) {
      this.state = this.props.ProductExterior.selected;
    } else {
      let state = {};
      const { fields } = this.props.ProductExterior.data;
      Object.entries(fields).map(([variance, data]) => {
        // If there is a default option available, pre-select the first one
        const selectedIndex = data.objects.findIndex(
          element => element.isDefault
        );
        if (selectedIndex !== -1) {
          state[variance] = {
            selectedKey: selectedIndex,
            id: fields[variance].objects[selectedIndex].id,
            name: fields[variance].objects[selectedIndex].name,
            price: fields[variance].objects[selectedIndex].price,
            thumbnail: fields[variance].objects[selectedIndex].files[0].path,
            stockId: selectedStockId(
              fields[variance].objects[selectedIndex].stockhistory
            )
          };
        } else {
          state[variance] = {
            selectedKey: 0,
            id: fields[variance].objects[0].id,
            name: fields[variance].objects[0].name,
            price: fields[variance].objects[0].price,
            thumbnail: fields[variance].objects[0].files[0].path,
            stockId: selectedStockId(fields[variance].objects[0].stockhistory)
          };
        }
      });
      this.state = state;
    }
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(variance, selectedKey) {
    const { fields } = this.props.ProductExterior.data;
    this.setState({
      ...this.state,
      [variance]: {
        selectedKey: selectedKey,
        id: fields[variance].objects[selectedKey].id,
        name: fields[variance].objects[selectedKey].name,
        price: fields[variance].objects[selectedKey].price,
        thumbnail: fields[variance].objects[selectedKey].files[0].path,
        stockId: selectedStockId(
          fields[variance].objects[selectedKey].stockhistory
        )
      }
    });
  }

  componentDidMount() {
    this.props.selectedProductExterior(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this.props.selectedProductExterior(this.state);
    }
  }

  render() {
    // console.log("ProductExterior= ", this.props.ProductExterior);
    // console.log("state= ", this.state);
    const { fields } = this.props.ProductExterior.data;
    return (
      <React.Fragment>
        {Object.entries(fields).map(([variance, data], key) => (
          <div className="configure-sect row" key={key}>
            <div className="configure-gall col-lg-8 d-flex flex-column">
              <VariantInfo
                images={data.objects[
                  this.state[variance].selectedKey
                ].images.map(item => item.path)}
                name={data.objects[this.state[variance].selectedKey].name}
              />
            </div>
            <div className="configure-opt col-lg-4 d-flex flex-column">
              <VariantSelection
                title={variance}
                objects={data.objects}
                handleOptionChange={this.handleOptionChange}
                selectedId={this.state[variance].id}
                stockHistory={
                  data.objects[this.state[variance].selectedKey].stockhistory
                }
              />
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default ExteriorDynamic;
