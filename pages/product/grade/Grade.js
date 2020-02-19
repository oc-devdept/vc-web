import React, { Component, useState } from "react"
import DialogRoot from "Components/Dialog/DialogRoot";

import { useSelector } from "react-redux";
import Booking from 'Components/booking'

const Grade = ({ProductGrade}) => {

  // constructor(props) {
  //   super(props)
  //   this.handleOptionChange = this.handleOptionChange.bind(this)
  //   this.state={
  //     toggle: false
  //   }
  // }

  const [Toggle, setToggle] = useState(false);

  const handleOptionChange = (event) => {
    const { id } = event.target
    this.props.selectedProductGrade(id)
    this.props.getProductGradeData(id)
  }

  const isValidated = () => {
    return !!ProductGrade.id
  }

  const _RestartToggle = () =>{
    setToggle(() => !Toggle)
  }

  // const customerId = useSelector(state => state.UserState.customerId);
  const { fields, images, name, description, id } = ProductGrade.data

  return(
    <div className="configure-sect row">
      <div className="configure-gall col-lg-8 d-flex flex-column">
        <img src={ images } className="configCoverImg align-self-center"/>
      <h3 className="text-uppercase text-center m-2">{ name }</h3>      
      <p>{ description }</p>
      <button
        className="d-flex align-items-center px-2 py-1"
        onClick={_RestartToggle}
        style={{border:"1px solid #4b6674", backgroundColor:'transparent', width:'max-content'}}
      >
        <i className='fas fa-car mr-1' style={{color:"#4b6674", fontSize:24}}/>
          <p style={{fontSize:12, color:"#4b6674"}}>BOOK TEST DRIVE</p>
      </button>
      </div>
      <div className="configure-opt col-lg-4">
        <h3 className="configure-opt-title">01 Grade</h3>
        <ul className="list-unstyled">
          {!!fields &&
            fields.map(( item, id ) => (
              <li className="configure-list"
                key={ id }
                id= { item.id }
                style={item.id == id ? 
                  {border: "2px solid #F29D30", color: "#F29D30", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", fontWeight:"bold"} : 
                  {border: "1px solid #DEE2E6"}
                }
                onClick={handleOptionChange}
              >
                {item.name}<br/>
                ${item.selling_Price}
              </li>
            ))
          }
        </ul>
      </div>
          
      {Toggle && 
        <DialogRoot
            // title={"Hello world"}
            size="md"
            show={Toggle}
            handleHide={_RestartToggle}
        >
            <Booking
                // _HandleDayChange={_HandleDayChange}
                // _HandleInputDate={_HandleInputDate}
                // _setItemTimeSlot={_setItemTimeSlot}
                // Timeslot={Timeslot}
                // currentDate={currentDate}
                // model={model}
                // timeslot={timeslot}
                // description={description}
            />
        </DialogRoot>
      }
    </div>
  )
  
}

// const mapStateToProps = state => {
//   const { ProductGrade } = state.ProductState
//   return { ProductGrade }
// }

// export default connect(
//   mapStateToProps,
//   {
//     selectedProductGrade,
//     getProductGradeData
//   }
// )(Grade)

export default Grade

// import DialogRoot from "Components/Dialog/DialogRoot";
