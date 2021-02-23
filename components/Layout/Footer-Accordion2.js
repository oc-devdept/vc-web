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
      <div class="mobileFooterHeader" onClick={() => toggleView(0)}
      style={{
        color:"#c0c0c0",
        backgroundColor: "#666666",
        padding: "10px 20px",
        marginLeft:"20px ",
        marginRight:"20px ",
        fontSize:" 0.9rem", 
        borderBottom:"1px solid #000000",
      }}>
      { html.length > 0 && html[0].title }
         <span  ><ExpandMoreIcon  style={{float:"right"}}/></span></div>
      <div className={"mobileFooterDetails optionDisplay"+ (isShowing[0] ? " show" : "")} style={{paddingRight:"25px" ,paddingLeft:"20px" , margin:0}} 
      >
      {
         html.length > 0 && (<div dangerouslySetInnerHTML={{__html: html[0].html}} />)
                                }  
        </div>
      <div class="mobileFooterHeader " onClick={()=> toggleView(1)} 
      style={{
        color:"#c0c0c0",
        backgroundColor: "#666666",
        padding: "10px 20px",
        marginLeft:"20px ",
        marginRight:"20px ",
        fontSize:" 0.9rem", 
        borderBottom:"1px solid #000000",
      }}>
      { html.length > 0 && html[1].title }
         <span  ><ExpandMoreIcon style={{float:"right"}} /></span></div>

         <div className={"mobileFooterDetails optionDisplay"+ (isShowing[1] ? " show" : "")}
         style={{paddingRight:"25px" ,paddingLeft:"20px" , margin:0}}
         >
         {
          html.length > 0 && (<div dangerouslySetInnerHTML={{__html: html[1].html}} 
           
          />)
                                }  
</div >
      <div class="mobileFooterHeader" onClick={() => toggleView(2)}
       style={{
        color:"#c0c0c0",
        backgroundColor: "#666666",
        padding: "10px 20px",
        marginLeft:"20px ",
        marginRight:"20px ",
        fontSize:" 0.9rem", 
        borderBottom:"1px solid #000000",
      }}>
      { html.length > 0 && html[2].title }
         <span  ><ExpandMoreIcon style={{float:"right"}} /></span></div>

         <div className={"mobileFooterDetails optionDisplay"+ (isShowing[2] ? " show" : "")} 
         style={{paddingRight:"25px" ,paddingLeft:"20px" , margin:0}}>
         {
           html.length > 0 && (<div className="optionDisplay-text " dangerouslySetInnerHTML={{__html: html[2].html}} 
           
           />)
                                }  
</div>
    </React.Fragment>
    
  );
};
/*

*/