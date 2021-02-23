import React, { useState, useEffect } from "react";
import { formatPrice } from "Components/Helpers/helpers";

import DialogRoot from "Components/Dialog/DialogRoot";
import Booking from "Components/booking/booking";
import UserProfile from "Components/booking/profile";
import { NotificationManager } from "react-notifications";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'

import Moment from "moment";
import api from "Api";

let InitBookService = {
  model: "",
  date: new Date(), // schedule date
  timeslot: "", // AM/PM
  description: ""
};

let InitUserProfile = {
  lastName: "",
  firstName: "",
  email: "",
  phone: ""
};

const Grade = ({
  ProductGrade,
  ProductSpecification,
  selectedProductGrade
}) => {
  const [Toggle, setToggle] = useState(false);
  const [Timeslot] = useState(["AM", "PM"]);
  const [currentDate, setDate] = useState(Moment(new Date()).format("LL"));
  const [BookService, setBookService] = useState({ ...InitBookService });
  const [Profile, setUserProfile] = useState({ ...InitUserProfile });

  useEffect(() => {
    setBookService(BookService => ({
      ...BookService,
      model: ProductGrade.name
    }));
  }, [ProductGrade]);

  const _HandleInputProfile = (element, e) => {
    setUserProfile(Profile => ({ ...Profile, [element]: e }));
  };

  const _HandleDayChange = (date, { disabled }) => {
    if (disabled === undefined) {
      setDate(() => Moment(date).format("LL"));
      setBookService(BookService => ({ ...BookService, date: date }));
    }
  };

  const _HandleInputForm = (element, e) => {
    setBookService(BookService => ({ ...BookService, [element]: e }));
  };

  const _setItemTimeSlot = e => {
    setBookService(BookService => ({
      ...BookService,
      timeslot: e.target.value
    }));
  };

  const handleOptionChange = async id => {
   
    selectedProductGrade(id);
    //getProductGradeData(id);
  };

  const _RestartToggle = () => {
    setToggle(() => !Toggle);
  };

  const onSubmitForm = async () => {
    const newBooking = {
      service: "Test Drive",
      status: "Awaiting",
      contact: Profile,
      content: BookService
    };

    const result = await api.post(`/bookings/createBooking`, {
      data: newBooking
    });

    switch (result.data.success) {
      case 0:
        NotificationManager.error(
          "Unable to make booking request, please try again later"
        );
        break;
      case 1:
        NotificationManager.success("Your booking has submitted successfully");
        setBookService(() => ({ ...InitBookService }));
        setUserProfile(() => ({ ...InitUserProfile }));
        _RestartToggle();
        break;
      default:
        break;
    }
  };

  const { model, date, timeslot, description } = BookService;
  const { lastName, firstName, email, phone } = Profile;

  // console.log("ProductGrade= ", ProductGrade);
  return (
    <div className="configure-sect row">
      <div className="configure-gall col-lg-8 d-flex flex-column p-3">
        <img
          src={ProductGrade.images}
          className="configCoverImg align-self-center"
          style={{ maxWidth: "100%" }}
        />
        <h3 className=" text-center my-3">{ProductGrade.name}</h3>
        <p className="mb-4">{ProductGrade.description}</p>
        <ul>
          {
            ProductGrade.details && ProductGrade.details.map((item, id)=> (
              <li key={"detail"+id}>{item.name}: {item.value} {item.unit != "." ? item.unit : "" }</li>              
            ))
          }
        </ul>
        
      </div>
      <div className="configure-opt col-lg-4">
        <h3 className="configure-opt-title">01 Grade</h3>
        <ul className="list-unstyled">
          {!!ProductGrade.data.fields &&
            ProductGrade.data.fields.map((item, id) => (
              <li
                className="configure-list"
                key={id}
                id={item.id}
                style={
                  item.id == ProductGrade.id
                    ? {
                        border: "2px solid #c0c0c0",
                        color: "#000000",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
                        fontWeight: "bold"
                      }
                    : { border: "1px solid #c0c0c0" }
                }
                onClick={()=> handleOptionChange(item.id)}
              >
              <img src={item.images.length > 0 ? item.images[0].path : ""} className="gradeThumb" />  <div className="configText">{item.name}
              <br />
                {formatPrice(item.selling_Price)}
              </div>
               
              </li>
            ))}
        </ul>
      </div>

      
    </div>
  );
};

export default Grade;

/*
{Toggle && (
        <DialogRoot
          // title={"Hello world"}
          size="md"
          show={Toggle}
          handleHide={_RestartToggle}
        >
          <div className="d-flex justify-content-start">
            <span
              style={{ width: 250, padding: 10, marginLeft: 20, fontSize: 24 }}
            >
              Book Test Drive
            </span>
          </div>

          <UserProfile
            _HandleInputProfile={_HandleInputProfile}
            lastName={lastName}
            firstName={firstName}
            email={email}
            phone={phone}
          />

          <Booking
            _HandleDayChange={_HandleDayChange}
            _HandleInputForm={_HandleInputForm}
            _setItemTimeSlot={_setItemTimeSlot}
            Timeslot={Timeslot}
            currentDate={currentDate}
            model={model}
            timeslot={timeslot}
            description={description}
            date={date}
          />

          <div className="d-flex justify-content-end">
            <button
              onClick={onSubmitForm}
              style={{ width: 250, padding: 10, margin: 20, borderRadius: 10 }}
              className="btn-primary"
            >
              BOOK APPOINTMENT
            </button>
          </div>
        </DialogRoot>
      )}

      {!!Object.values(ProductSpecification).length &&
          (ProductSpecification.data.length === 0 ? (
            <p>No product specification available.</p>
          ) : (
            <div className="specifications d-flex flex-wrap">
              {ProductSpecification.data.map(detail =>
                Object.entries(detail).map(([key, value], id) => (
                  <div key={id} className="specification-group mb-4 mr-4">
                    <h6 className="text-uppercase">{key}</h6>
                    {value.map((item, idd) => (
                      <React.Fragment key={idd}>
                        <div className="d-flex justify-content-between mb-1">
                          <span style={{ fontWeight: 500 }} className="mr-2">
                            {item.detailCategory.name}:
                          </span>
                          <div>
                            <span>{item.value}&nbsp;</span>
                            <span>{item.detailCategory.unit}</span>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                ))
              )}
            </div>
          ))}
*/