import React, { Component } from "react";

import VariantSelection from "Components/configurator/VariantSelection";
import VariantInfo from "Components/configurator/VariantInfo";
import { selectedStockId } from "Components/Helpers/helpers";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ThreeSixty } from "@material-ui/icons";

const StyledTabs = withStyles({
  
  indicator: {
    display: "flex",
    height: "3px",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: "50%",
      width: "100%",
      backgroundColor: "#FF8B19",
    },
    padding: "0 15px"
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
      color: "#FF8B19",
      "& .tabIconShape": {
        backgroundColor: "#FCE8D4"
      },
    }
  },
  wrapper: {
    fontWeight: "700",
    padding: "0 20px"
  },
  selected: {}
}))(props => <Tab disableFocusRipple disableTouchRipple {...props} />);



class ExtInt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabVal: 0,
      exterior: {},
      interior: {}
    }
    
         
    var { fields } = this.props.ProductExterior.data[this.props.gradeId];    
          
    Object.entries(fields).map(([variance, data]) => {
      // If there is a default option available, pre-select the first one  
      var selectedIndex = data.objects.findIndex(element => element.isDefault);
      if(this.props.ProductExterior.selected != null && this.props.ProductExterior.selected[variance] !== undefined){
        selectedIndex = data.objects.findIndex(element => element.id === this.props.ProductExterior.selected[variance].id)
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
        updateData = {
          selectedKey: 0,
          id: fields[variance].objects[0].id,
          name: fields[variance].objects[0].name,
          price: fields[variance].objects[0].price,
          thumbnail: fields[variance].objects[0].files[0].path,
          stockId: selectedStockId(fields[variance].objects[0].stockhistory)
        };        
      }
      this.state['exterior'][variance] = updateData;
      this.props.selectedProductExterior({[variance]:updateData});        
    });
    
      
   var { fields} = this.props.ProductInterior.data[this.props.gradeId];
    
    Object.entries(fields).map(([variance, data]) => {        
      // If there is a default option available, pre-select the first one
      
    var selectedIndex = data.objects.findIndex(
      element => element.isDefault
      );
      if(this.props.ProductInterior.selected != null && this.props.ProductInterior.selected[variance] !== undefined){
        selectedIndex = data.objects.findIndex(element => element.id === this.props.ProductInterior.selected[variance].id)
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
        updateData = {
          selectedKey: 0,
          id: fields[variance].objects[0].id,
          name: fields[variance].objects[0].name,
          price: fields[variance].objects[0].price,
          thumbnail: fields[variance].objects[0].files[0].path,
          stockId: selectedStockId(fields[variance].objects[0].stockhistory)
        };
        
      }
      this.state['interior'][variance] = updateData;
      this.props.selectedProductInterior({[variance]: updateData});
    });
     
    
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleInteriorOptionChange = this.handleInteriorOptionChange.bind(this);
  }

  handleOptionChange(category, variance, selectedKey) {
    const { fields } = this.props.ProductExterior.data[this.props.gradeId];
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
    this.props.selectedProductExterior({[variance]:data})
    this.setState({
      ...this.state,
      tabVal: 0,
      [category]:{
        ...this.state[category],
        [variance]: data
      }      
    });
  }

  handleInteriorOptionChange(category, variance, selectedKey) {
    const { fields } = this.props.ProductInterior.data[this.props.gradeId];
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
    this.props.selectedProductInterior({[variance]: data})
    this.setState({
      ...this.state,
      tabVal: 1,
      [category]:{
        ...this.state[category],
        [variance]: data
      }      
    });
  }

  handleTabChange = (event, newValue) => {
    this.setState({
      tabVal: newValue
    })
  };

/*
  componentDidMount() {
    this.props.getProductGradeData(id);
    this.props.selectedProductExterior(this.state.exterior);
    this.props.selectedProductInterior(this.state.interior);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this.props.selectedProductExterior(this.state.exterior);
      this.props.selectedProductInterior(this.state.interior);
    }
  }
*/


  render() {
    // console.log("ProductExterior= ", this.props.ProductExterior);
    // console.log("state= ", this.state);
    const { fields } = this.props.ProductExterior.data[this.props.gradeId];
    const fields2 = this.props.ProductInterior.data[this.props.gradeId].fields;
    return (
      <React.Fragment>
          <div className="row">
            <div className="col-lg-8"><StyledTabs
            value={this.state.tabVal}
            indicatorColor="primary"
            textColor="primary"                      
            aria-label="Car Grade"
            centered
            onChange={this.handleTabChange}
        >
            <StyledTab label="Color" />                      
            <StyledTab label="Upholstery" />
        </StyledTabs></div>
          </div>
          
        
          <div className="configure-sect row">
          <div className="configure-gall col-lg-8 d-flex flex-column">
            {this.state.tabVal == 0 && Object.entries(fields).map(([variance, data], key) => (
              <VariantInfo
                images={data.objects[
                  this.state.exterior[variance].selectedKey
                ].images.map(item => item.path)}
                name={data.objects[this.state.exterior[variance].selectedKey].name}
              />
              )) }
              {this.state.tabVal == 1 && fields2 !== undefined && Object.entries(fields2).map(([variance, data], key) => (
              <VariantInfo
                images={data.objects[
                  this.state.interior[variance].selectedKey
                ].images.map(item => item.path)}
                name={data.objects[this.state.interior[variance].selectedKey].name}
              />
              )) }
            </div>
            <div className="configure-opt col-lg-4 d-flex flex-column">
            {fields !== undefined && Object.entries(fields).map(([variance, data], key) => (
              <VariantSelection
                title={variance}
                objects={data.objects}
                handleOptionChange={this.handleOptionChange}
                category="exterior"
                selectedId={this.state.exterior[variance].id}
                stockHistory={
                  data.objects[this.state.exterior[variance].selectedKey].stockhistory
                }
                showTab={this.state.tabVal == 0}
              />
              )) }
              { fields2 !== undefined && Object.entries(fields2).map(([variance, data], key) => (
              <VariantSelection
                title={variance}
                objects={data.objects}
                handleOptionChange={this.handleInteriorOptionChange}
                category="interior"
                selectedId={this.state.interior[variance].id}
                stockHistory={
                  data.objects[this.state.interior[variance].selectedKey].stockhistory
                }
                showTab={this.state.tabVal == 1}
              />
              )) }
            </div>
            
          </div>
        
      </React.Fragment>
    );
  }
}

export default ExtInt;