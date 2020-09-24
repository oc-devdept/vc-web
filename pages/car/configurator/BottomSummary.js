import React, { useState, useEffect } from "react";

const BottomSummary = props => {
    return (
        <div className="bottomSummary">
            <h5>Summary</h5>
            <ol>
                <li>Car Grade
                    <ul>
                        <li><div className="info">Toyota Raize 1.0 TURBO</div>
                            <div className="price">$78,000</div>
                        </li>
                    </ul>
                </li>
                <li>Car Grade
                    <ul>
                        <li><div className="info">Toyota Raize 1.0 TURBO</div>
                            <div className="price">$78,000</div>
                        </li>
                    </ul>
                </li>
            </ol>
            <hr />
            <div className="totalRow">
            <div className="grandTotal">Grand Total</div>
            <div className="price">$78,000</div>
            </div>
        </div>
    )
}
export default BottomSummary;