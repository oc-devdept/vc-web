import React, { useState, useEffect } from "react";
import { formatPrice } from "Components/Helpers/helpers";

import DialogRoot from "Components/Dialog/DialogRoot";
import Booking from "Components/booking/booking";
import UserProfile from "Components/booking/profile";
import { NotificationManager } from "react-notifications";

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
  selectedProductGrade,
  getProductGradeData
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

  const _HandleDayChange = date => {
    setDate(() => Moment(date).format("LL"));
    setBookService(BookService => ({ ...BookService, date: date }));
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

  const handleOptionChange = async event => {
    const { id } = event.target;
    selectedProductGrade(id);
    getProductGradeData(id);
  };

  const isValidated = () => {
    return !!ProductGrade.id;
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

  // console.log("ProductSpecification= ", ProductSpecification);
  return (
    <div className="configure-sect row">
      <div className="configure-gall col-lg-8 d-flex flex-column p-3">
        <img
          src={ProductGrade.images}
          className="configCoverImg align-self-center"
          style={{ maxWidth: "100%" }}
        />
        <h3 className="text-uppercase text-center m-2">{ProductGrade.name}</h3>
        <p>{ProductGrade.description}</p>
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
                        <p className="d-flex justify-content-between mb-1">
                          <span className="mr-2">
                            {item.detailCategory.name}:
                          </span>
                          <span>
                            {item.value} {item.detailCategory.unit}
                          </span>
                        </p>
                      </React.Fragment>
                    ))}
                  </div>
                ))
              )}
            </div>
          ))}
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
          {!!ProductGrade.data.fields &&
            ProductGrade.data.fields.map((item, id) => (
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
                <br />
                {formatPrice(item.selling_Price)}
              </li>
            ))}
        </ul>
      </div>

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
    </div>
  );
};

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

export default Grade;

// import DialogRoot from "Components/Dialog/DialogRoot";
