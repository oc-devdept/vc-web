import React, { Component } from "react";

import VariantSelection from "Components/configurator/VariantSelection";
import VariantInfo from "Components/configurator/VariantInfo";

class Exterior extends Component {
  constructor(props) {
    super(props);

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
    const { id } = event.target;
    this.props.selectedProductExterior(id);
  }

  isValidated() {
    return !!this.props.ProductExterior.id;
  }

  render() {
    console.log("exterior props: ", this.props);
    const { ProductExterior } = this.props;
    return (
      <div className="configure-sect row">
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
      </div>
    );
  }
}

export default Exterior;
