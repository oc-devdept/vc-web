import React, { Component } from "react";
import VariantSelection from "Components/configurator/VariantSelection";
import VariantInfo from "Components/configurator/VariantInfo";
import { selectedStockId } from "Components/Helpers/helpers";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const StyledTabs = withStyles({
  
  indicator: {
    display: "flex",
    height: "3px",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: "50%",
      width: "100%",
      backgroundColor: "#000000",
    },
    padding: "0 6px"
  }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    color: "#a7a7a7",
    fontSize: theme.typography.pxToRem(15),
    "&:focus": {
      opacity: 1
    },
    "&$selected": {
      color: "#000000",
      "& .tabIconShape": {
        backgroundColor: "#FCE8D4"
      },
    },
    minWidth: "80px",
    fontSize: "1em"
  },
  wrapper: {
    fontWeight: "700",
    padding: "0 5px"
  },
  selected: {}
}))(props => <Tab disableFocusRipple disableTouchRipple {...props} />);

class Accessories extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabVal: 0,
            accessories: {}
        }
        if(this.props.ProductAccessories.data[this.props.gradeId]){
          const { fields } = this.props.ProductAccessories.data[this.props.gradeId];       
          Object.entries(fields).map(([variance, data]) => {
              // If there is a default option available, pre-select the first one
              let selectedIndex = data.options.findIndex(
                element => element.isDefault
              );
              var selectedIds = [];
              if(this.props.ProductAccessories.selected != null && this.props.ProductAccessories.selected[variance] != undefined ){
                  for(let i=0; i < data.options.length; i++){
                      for(let j=0; j < this.props.ProductAccessories.selected[variance].length; j++){
                          if(data.options[i].id === this.props.ProductAccessories.selected[variance][j]){
                              selectedIndex = i;
                              selectedIds.push(data.options[i].id);
                          }
                      }    
                  }                
                }
                                      
              if (selectedIds.length > 0) {
                let data = {
                  selectedKey: selectedIndex
                }
                if(fields[variance].options){
                  data.id = fields[variance].options[selectedIds[0]].id;
                  data.name = fields[variance].options[selectedIds[0]].name;
                  data.price = fields[variance].options[selectedIds[0]].price;
                  data.thumbnail = fields[variance].options[selectedIds[0]].files[0].path;
                  data.selectedId = selectedIds;
                }
                this.state.accessories[variance] = data;
              } else {
                let data = {
                  selectedKey: 0
                }              
                if(fields[variance].options){
                  for(let i=0; i < fields[variance].options.length; i++){
                    if(fields[variance].options[i].isDefault){
                      selectedIds.push(fields[variance].options[i].id);
                    }
                  }
                  data.id = fields[variance].options[0].id;
                  data.name = fields[variance].options[0].name;
                  data.price = fields[variance].options[0].price;
                  data.thumbnail = fields[variance].options[0].files[0].path;
                  data.selectedId = selectedIds;
                  this.props.selectedProductAccessories(variance, selectedIds);
                }
                this.state.accessories[variance] = data;
              }        
          });
        }
        
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }


    handleOptionChange(category, variance, selectedKey) {
        const { fields } = this.props.ProductAccessories.data[this.props.gradeId];
        //check if allow one or multi select
        let selectedIds = [...this.state.accessories[variance].selectedId];
        const options = fields[variance].options;
        if(!Array.isArray(selectedIds)){
          selectedIds = [selectedIds];
        }
        let found = selectedIds.indexOf(fields[variance].options[selectedKey].id);
        if( found >= 0){
          //remove if editable
          if(fields[variance].options[selectedKey].isDefault && !fields[variance].options[selectedKey].editable){
            //cannot remove
          }
          else {
            selectedIds.splice(found, 1);
            //need to restore default if any
            if(selectedIds.length == 0){
              for(let i=0; i < fields[variance].options.length; i++){
                if(fields[variance].options[i].isDefault){
                  selectedIds.push(fields[variance].options[i].id);
                  selectedKey = i;
                }
              }
            }                  

          }
        }
        else {
          //check if multi add is allowed
          if(fields[variance].selectOne){
            selectedIds[0] = fields[variance].options[selectedKey].id;
          }
          else {
            selectedIds.push(fields[variance].options[selectedKey].id);
          }
        }
        //change tab
        let tab = 0;
        Object.keys(fields).forEach( (item, index) => {
          if(item === variance){
            tab = index;
          }
        });
        this.props.selectedProductAccessories(variance, selectedIds);
        this.setState({
          tabVal: tab,
          accessories:{
            ...this.state.accessories,
            [variance]: {
              selectedKey: selectedKey,
              id: fields[variance].options[selectedKey].id,
              name: fields[variance].options[selectedKey].name,
              price: fields[variance].options[selectedKey].price,
              thumbnail: fields[variance].options[selectedKey].files[0].path,
              selectedId: selectedIds
            }
          }      
        });
        
    }

    handleTabChange = (event, newValue) => {
      this.setState({
        tabVal: newValue
      })
    };


    render() {
        let fields = {};
        if(this.props.ProductAccessories.data[this.props.gradeId]){
          fields = this.props.ProductAccessories.data[this.props.gradeId].fields;
        }        
        return (
          <React.Fragment>
          <div className="row">
            <div className="col-lg-8"><StyledTabs
            value={this.state.tabVal}
            indicatorColor="primary"
            textColor="primary"                      
            aria-label="Accessories"
            centered
            onChange={this.handleTabChange}
        >
          {fields !== undefined && Object.keys(fields).map( key  => (
            <StyledTab label={key} id={key} />                      
          ))}
        </StyledTabs></div>
          </div>
            <div className="configure-sect row">
                <div className="configure-gall col-lg-8 d-flex flex-column">
                {Object.entries(fields).map(([variance, data], key) => (
              key == this.state.tabVal ?
              <VariantInfo
                images={data.options[
                  this.state.accessories[variance].selectedKey
                ].files.map(item => item.path)}
                name={data.options[this.state.accessories[variance].selectedKey].name}
              /> : (<div></div>)
              )) }
                    
                  </div>
                  <div className="configure-opt col-lg-4 d-flex flex-column">
                  {fields !== undefined && Object.entries(fields).map(([variance, data], key) => (
                <VariantSelection
                  title={variance}
                  objects={data.options}
                  handleOptionChange={this.handleOptionChange}
                  category="accessories"
                  selectedId={this.state.accessories[variance].selectedId} 
                  showTab={this.state.tabVal == key}               
                />
                )) }                  
                </div>
                  
            </div>
          </React.Fragment>
        );
    }
}

export default Accessories;