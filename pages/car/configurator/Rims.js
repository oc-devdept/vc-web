import React, { Component } from "react";
import VariantSelection from "Components/configurator/VariantSelection";
import VariantInfo from "Components/configurator/VariantInfo";
import { selectedStockId } from "Components/Helpers/helpers";

class Rims extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rims: {}
    }

    if(this.props.ProductRims.data[this.props.gradeId]){
      const { fields } = this.props.ProductRims.data[this.props.gradeId];
      Object.entries(fields).map(([variance, data]) => {
        // If there is a default option available, pre-select the first one
        var selectedIndex = data.objects.findIndex(
          element => element.isDefault
        );
        if(this.props.ProductRims.selected != null && this.props.ProductRims.selected[variance] !== undefined){
          selectedIndex = data.objects.findIndex(element => element.id === this.props.ProductRims.selected[variance].id)
        } 
        let updateData = null;
        if (selectedIndex !== -1) {
          updateData = {
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
          if(fields[variance].objects.length > 0){
            updateData = {
              selectedKey: 0,
              id: fields[variance].objects[0].id,
              name: fields[variance].objects[0].name,
              price: fields[variance].objects[0].price,
              thumbnail: fields[variance].objects[0].files[0].path,
              stockId: selectedStockId(fields[variance].objects[0].stockhistory)
            };
          }                    
        }
        this.state['rims'][variance] = updateData;
        this.props.selectedProductRims({[variance]: updateData});
      }); 
    }         
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(category, variance, selectedKey) {
    const { fields } = this.props.ProductRims.data[this.props.gradeId];
    let data = {
      selectedKey: selectedKey,
      id: fields[variance].objects[selectedKey].id,
      name: fields[variance].objects[selectedKey].name,
      price: fields[variance].objects[selectedKey].price,
      thumbnail: fields[variance].objects[selectedKey].files[0].path,
      stockId: selectedStockId(
        fields[variance].objects[selectedKey].stockhistory
      )
    }
    this.props.selectedProductRims({[variance]: data});
    this.setState({
      ...this.state,
      rims:{
        ...this.state.rims,
        [variance]: data
      }      
    });
  }

  isValidated() {
    return !!this.props.ProductRims.id;
  }

  render() {
    let fields = {};
    if(this.props.ProductRims.data[this.props.gradeId]){
      fields = this.props.ProductRims.data[this.props.gradeId].fields;
    }    
    return (
      <div className="configure-sect row">
          <div className="configure-gall col-lg-8 d-flex flex-column">
            { Object.entries(fields).map(([variance, data], key) => (
              this.state.rims[variance] ? 
              <VariantInfo
                images={data.objects[
                  this.state.rims[variance].selectedKey
                ].images.map(item => item.path)}
                name={data.objects[this.state.rims[variance].selectedKey].name}
              /> : <div></div>
              )) }
              
            </div>
            <div className="configure-opt col-lg-4 d-flex flex-column">
            {fields !== undefined && Object.entries(fields).map(([variance, data], key) => (
              this.state.rims[variance] ? 
              <VariantSelection
                title={variance}
                objects={data.objects}
                handleOptionChange={this.handleOptionChange}
                category="rims"
                selectedId={this.state.rims[variance].id}
                stockHistory={
                  data.objects[this.state.rims[variance].selectedKey].stockhistory
                }
              /> : <div></div>
              )) }
            </div>
            
          </div>
    );
  }
}

export default Rims;
