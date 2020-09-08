import React, { Component } from "react";

import PageBanner from "Components/Shared/PageBanner";
import DayPicker from "react-day-picker";

// const _HandleDayChange = (date) => {
//     setDate(() => Moment(date).format('LL'))
//     setBookService(BookService => ({ ...BookService, date: date }));
// }

export default function BookCarServicing() {
    return (
        <div className="bookCarServicing-area">
            <PageBanner
                overlay
                title="BOOK A CAR SERVICING
                APPOINTMENT WITH US TODAY"
                caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula arcu, 
                tincidunt vitae porttitor vitae, cursus eu dolor. Nullam et felis ipsum. Vestibulum dapibus metus ligula, 
                vitae porttitor quam consectetur nec."
                bgImgUrl={"/static/service/booknowBanner.png"}
            />
            <div className="header-bar">
                <h6>DRIVER'S DETAILS</h6>
            </div>
            <div className="driver-details">
                <form className="driver-details-form">
                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <label for="inputTitle">Title</label>
                            <select id="inputTitle" class="form-control">
                                <option>Mr.</option>
                                <option>Ms.</option>
                                <option>Miss</option>
                            </select>
                        </div>
                        <div class="form-group col-md-5">
                            <label for="inputFirstName">First Name</label>
                            <input type="text" class="form-control" id="firstName" placeholder="Enter your first name" />
                        </div>
                        <div class="form-group col-md-5">
                            <label for="inputLastName">Last Name</label>
                            <input type="text" class="form-control" id="lastName" placeholder="Enter your last name" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputPhoneNumber">Phone Number</label>
                            <input type="text" class="form-control" id="phoneNumber" placeholder="Enter your phone number" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputEmailAddess">Email Address</label>
                            <input type="email" class="form-control" id="emailAddress" placeholder="Enter your email address" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="header-bar">
                <h6>CAR SERVICING DETAILS</h6>
            </div>
            <div className="driver-details">
                <form className="driver-details-form">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCarModel">Your Car Model</label>
                            <input type="email" class="form-control" id="carModel" placeholder="Enter your car model" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputDate">Date</label>
                            <input type="email" class="form-control" id="date" placeholder="Enter your car model" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputTimesort">Timeslot</label>
                            <select id="inputTimesort" class="form-control">
                                <option>AM</option>
                                <option>PM</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row last-row">
                        <div class="form-group col-md-10">
                            <label for="inputDescription">Description</label>
                            <textarea class="form-control" id="description" rows="5" placeholder="Enter your message"></textarea>
                        </div>
                        <DayPicker
                            // selectedDays={[date]}
                            // onDayClick={_HandleDayChange}
                            month={new Date()}
                            fromMonth={new Date()}
                            toMonth={new Date(new Date().setMonth(new Date().getMonth() + 1))}
                            disabledDays={[
                                {
                                after: new Date(
                                    new Date().setMonth(new Date().getMonth() + 1)
                                ),
                                before: new Date()
                                }
                            ]}
                            className="form-date"
                        />
                    </div>
                    <div align="center">
                        <button type="submit" class="btn btn-primary bookAppBtn">BOOK APPOINTMENT</button>
                    </div>
                </form>
                <div className="successfulMessage" align="center">
                    <div className="section-title without-bg" align="center">
                        <h2>BOOKING SUCCESSFUL</h2>
                    </div>
                    <img src="/static/service/successful_tick.png" />
                    <p>Your appointment has been successfully registered.</p>
                    <button type="submit" class="btn btn-primary"> Return to the homepage</button>
                </div>
            </div>
        </div>
    );
}