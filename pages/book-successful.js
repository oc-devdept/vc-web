import React, { Component } from 'react'

function SuccessfulBooking(props) {
    const {visible} = props;
    return (
        <div>
            {visible &&
        <div className="successfulMessage" align="center">
            <div className="section-title without-bg" align="center">
                <h2>BOOKING SUCCESSFUL</h2>
            </div>
            <img src="/static/service/successful_tick.png" />
            <p>Your appointment has been successfully registered.</p>
            <button type="submit" class="btn btn-primary"> Return to the homepage</button>
        </div>
            }
        </div>
    )
}

export default SuccessfulBooking;
