import React, { Component, useState } from "react"
import DialogRoot from "Components/Dialog/DialogRoot";
import { formatPrice } from "Components/Helpers/helpers";

import Booking from 'Components/booking/booking'
import UserProfile from 'Components/booking/profile'

import Moment from 'moment'


let InitBookService = {
  model: '',
  date: new Date, // schedule date
  timeslot: '', // AM/PM
  description: '',
}


let InitUserProfile = {
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
}


const Grade = ({ProductGrade, selectedProductGrade, getProductGradeData}) => {

  const [Toggle, setToggle] = useState(false);
  const [Timeslot] = useState(["AM","PM"]);
  const [currentDate, setDate] = useState(Moment(new Date).format('LL'));
  const [BookService, setBookService] = useState(InitBookService);
  const [Profile, setUserProfile] = useState({...InitUserProfile});

 
  const _HandleInputProfile = (element, e) => {
    setUserProfile(Profile => ({ ...Profile, [element]: e }));
  };

  const _HandleDayChange = (date) => {
      setDate(() => Moment(date).format('LL'))
      setBookService(BookService => ({ ...BookService, date: date }));
  }

  const _HandleInputDate = (element, e) => {
      setBookService(BookService => ({ ...BookService, [element]: e }));
  };

  const _setItemTimeSlot = (e) => {
      setBookService(BookService => ({ ...BookService, timeslot: e.target.value }));
  }


  const handleOptionChange = async(event) => {
    const { id } = event.target
    selectedProductGrade(id)
    getProductGradeData(id)
  }

  const isValidated = () => {
    return !!ProductGrade.id
  }

  const _RestartToggle = () =>{
    setToggle(() => !Toggle)
  }

  // const customerId = useSelector(state => state.UserState.customerId);
  const {model, date, timeslot, description} = BookService
  const {lastName, firstName, email, phone} = Profile

  const { fields } = ProductGrade.data;

  return (
      <div className="configure-sect row">
        <div className="configure-gall col-lg-8 d-flex flex-column">
          <img
            src={ProductGrade.images}
            className="configCoverImg align-self-center"
          />
          <h3 className="text-uppercase text-center m-2">
            {ProductGrade.name}
          </h3>
          <p>{ProductGrade.description}</p>
          <button
            className="d-flex align-items-center px-2 py-1"
            onClick={_RestartToggle}
            style={{
              border: "1px solid #4b6674",
              backgroundColor: "transparent",
              width: "max-content"
            }}
          >
            <i
              className="fas fa-car mr-1"
              style={{ color: "#4b6674", fontSize: 24 }}
            />
              <p style={{ fontSize: 12, color: "#4b6674" }}>BOOK TEST DRIVE</p>
          </button>
        </div>
        <div className="configure-opt col-lg-4">
          <h3 className="configure-opt-title">01 Grade</h3>
          <ul className="list-unstyled">
            {!!fields &&
              fields.map((item, id) => (
                <li
                  className="configure-list"
                  key={id}
                  id={item.id}
                  style={
                    item.id == ProductGrade.id
                      ? {
                          border: "2px solid #F29D30",
                          color: "#F29D30",
                          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                          fontWeight: "bold"
                        }
                      : { border: "1px solid #DEE2E6" }
                  }
                  onClick={handleOptionChange}
                >
                  {item.name}
                  <br />$
                  {formatPrice(parseFloat(item.selling_Price).toFixed(2))}
                </li>
              ))}
          </ul>
        </div>
     
        {Toggle && 
          <DialogRoot
              // title={"Hello world"}
              size="md"
              show={Toggle}
              handleHide={_RestartToggle}
          >

              <UserProfile
                  _HandleInputProfile={_HandleInputProfile}
                  lastName={lastName}
                  firstName={firstName}
                  email={email}
                  phone={phone}
              />


              <Booking
                  _HandleDayChange={_HandleDayChange}
                  _HandleInputDate={_HandleInputDate}
                  _setItemTimeSlot={_setItemTimeSlot}
                  Timeslot={Timeslot}
                  currentDate={currentDate}
                  model={model}
                  timeslot={timeslot}
                  description={description}
              />
          </DialogRoot>
        }
     
      </div>
    );
  
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

     
