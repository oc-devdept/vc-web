import * as React from "react";
import Link from "next/link";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




export default function CustomAccordion(props) {

  let html = props.data;
  const [isShowing, changeShowing] = React. useState([false, false, false]);

  const toggleView = (num) => {
    let newtoggle = [...isShowing];
    newtoggle[num] = !isShowing[num];
    changeShowing(newtoggle);
  }
 
  //onClick={(props)=>{toggleView} }
  return (
    <React.Fragment>
      <div class="mobileFooterHeader">
      { html.length > 0 && html[0].title }
         <span onClick={() => toggleView(0)} ><ExpandMoreIcon /></span></div>
      <div className={"mobileFooterDetails optionDisplay"+ (isShowing[0] ? " show" : "")}>
      {
         html.length > 0 && (<div dangerouslySetInnerHTML={{__html: html[0].html}} />)
                                }  
        </div>
      <div class="mobileFooterHeader ">
      { html.length > 0 && html[1].title }
         <span onClick={()=> toggleView(1)} ><ExpandMoreIcon /></span></div>

         <div className={"mobileFooterDetails optionDisplay"+ (isShowing[1] ? " show" : "")}>
         {
          html.length > 0 && (<div dangerouslySetInnerHTML={{__html: html[1].html}} />)
                                }  
</div >
      <div class="mobileFooterHeader" >
      { html.length > 0 && html[2].title }
         <span onClick={() => toggleView(2)} ><ExpandMoreIcon /></span></div>

         <div className={"mobileFooterDetails optionDisplay"+ (isShowing[2] ? " show" : "")} >
         {
           html.length > 0 && (<div dangerouslySetInnerHTML={{__html: html[2].html}} />)
                                }  
</div>
    </React.Fragment>
    
  );
};
/*

*/