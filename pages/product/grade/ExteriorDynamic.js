import React, { Component } from "react";

import VariantSelection from "Components/configurator/VariantSelection";
import VariantInfo from "Components/configurator/VariantInfo";

class ExteriorDynamic extends Component {
  constructor(props) {
    super(props);

    let state = {};
    Object.entries(this.props.ProductExterior.data.fields).map(
      ([variance, data]) => {
        state[variance] = { selectedKey: 0, selectedId: data.objects[0].id };
      }
    );

    this.state = state;
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event, variance) {
    const { id } = event.target;
    this.setState({
      ...this.state,
      [variance]: {
        selectedKey: 1,
        selectedId: id
      }
    });
    this.props.selectedProductExterior(id);
  }

  isValidated() {
    return !!this.props.ProductExterior.id;
  }

  render() {
    console.log("exteriordynamic props: ", this.props);
    console.log("state= ", this.state);
    // const { ProductExterior } = this.props;
    const { fields } = this.props.ProductExterior.data;
    return (
      <>
        {/* <div className="configure-sect row">
          <div className="configure-gall col-lg-8 d-flex flex-column">
            <VariantInfo
              images={ProductExterior.images}
              name={ProductExterior.name}
            />
          </div>
          <div className="configure-opt col-lg-4 d-flex flex-column">
            <VariantSelection
              title="02 Exterior"
              objects={ProductExterior.data.fields["Colors"].objects}
              handleOptionChange={this.handleOptionChange}
              selectedId={ProductExterior.id}
              stockHistory={ProductExterior.stockhistory}
            />
          </div>
        </div> */}

        {/* REMAPPING FOR DYNAMIC INPUTS */}
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
                handleOptionChange={e => this.handleOptionChange(e, variance)}
                selectedId={this.state[variance].selectedId}
                stockHistory={
                  data.objects[this.state[variance].selectedKey].stockhistory
                }
              />
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default ExteriorDynamic;
