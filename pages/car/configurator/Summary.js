import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { formatPrice } from "Components/Helpers/helpers";

import { Icon, InlineIcon } from '@iconify/react';
import arrowLeft from '@iconify/icons-bi/arrow-left';

import SummaryTable from "Components/configurator/SummaryTable";
import Button from "react-bootstrap/Button";
import LoanCalculator from "Components/configurator/LoanCalculator";
import DialogRoot from "Components/Dialog/DialogRoot";
import Booking from "Components/booking/booking";
import UserProfile from "Components/booking/profile";
import { NotificationManager } from "react-notifications";

// Actions
import { saveCheckout } from "Ducks/checkout";

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

const Summary = props => {
  const overallSummary = [
    {
      text: "TOTAL CAR PRICE",
      price: props.ProductState.ProductTotal.total
    },
    {
      text: "MONTHLY INSTALLMENT",
      price: props.ProductState.LoanCalculator.monthlyInstallment
    },
    {
      text: "DEPOSIT",
      price: props.ProductState.LoanCalculator.deposit
    }
  ];

  const ProductGrade = props.ProductState.ProductGrade;

  const [Toggle, setToggle] = useState(false);
  const [Timeslot] = useState(["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]);
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
    // Synthetic event
    e.persist();
    setBookService(BookService => ({ ...BookService, timeslot: e.target.value}));
  };

  // const handleOptionChange = async event => {
  //   const { id } = event.target;
  //   selectedProductGrade(id);
  //   getProductGradeData(id);
  // };

  // const isValidated = () => {
  //   return !!ProductGrade.id;
  // };

  const _RestartToggle = () => {
    setToggle(() => !Toggle);
  };

  function checkout() {

    //const { ProductGrade, ProductExterior, ProductInterior, ProductRims, ProductAccessories, CoeSelected, AftersaleSelected, ProductTotal } = props.ProductState;
    props.saveCheckout(props.ProductState);

  }

  const onSubmitForm = async () => {
    const newBooking = {
      service: 'Test Drive',
      status: 'Awaiting',
      contact: Profile,
      content: BookService
    };

    const result = await api.post(`/bookings/createBooking`, { data: newBooking });

    if (result.data.data && result.data.data.success == 1) {
      NotificationManager.success("Your booking is successful");
      setBookService(() => ({ ...InitBookService }));
      setUserProfile(() => ({ ...InitUserProfile }));
      _RestartToggle();
    }
    else {
      NotificationManager.error(
        "Unable to make booking request, please try again later"
      );
    }
  };

  const { model, date, timeslot, description } = BookService;
  const { lastName, firstName, email, phone } = Profile;

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-6">
          <div className="py-3 px-0 text-center">

            <span className="summarySubtitle">Customization Overview</span>
            {/* <span className="summarySubtitle">CUSTOMIZATION OVERVIEW</span> */}

          </div>
          <SummaryTable
            page="summary"
            ProductState={props.ProductState}
            CheckoutState={props.CheckoutState}
            getCheckoutData={props.getCheckoutData}
            loanCalculator={props.ProductState.LoanCalculator}
            updateProductTotal={props.updateProductTotal}
            printConfigurator={props.printConfigurator}
            user_email={props.user_email}
          />
        </div>
        <div className="col-lg-6">
          <div className="py-3 px-0 text-center">

            <span className="summarySubtitle">Car Loan Calculator</span>

          </div>
          <div>
            <LoanCalculator
              productTotal={props.ProductState.ProductTotal}
              loanCalculator={props.ProductState.LoanCalculator}
              updateLoanCalculator={props.updateLoanCalculator}
              getInterestRate={props.getInterestRate}
            />
          </div>

          <div className="d-flex justify-content-between" 
          >
            {/* <div className="d-flex">
              <button
                style={{ padding: 10 ,  width:"100px" }}
                className="btn-primary  prevBtn"
                onClick={props.goPrev}

              >
                <p style={{ color: "white" }}
                >
                  <InlineIcon icon={arrowLeft} /> PREV
                </p>
              </button>
            </div> */}
            <div className="d-flex">
              <button className="makeEnquiryBtn"
                onClick={_RestartToggle}
              >
                <p>
                  Make Enquiry
                </p>
              </button>
            </div>
            <div className="d-flex">
              <Button onClick={checkout}>
                <Link href="/checkout">
                  <p>Reserve Car Now</p>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {Toggle && (
        <DialogRoot size="md" show={Toggle} handleHide={_RestartToggle}>
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
            value='timeslot'
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
              Book Appointment
            </button>
          </div>
        </DialogRoot>
      )}
    </React.Fragment>
  );
};

export default connect(null, { saveCheckout })(Summary);

/*

*/