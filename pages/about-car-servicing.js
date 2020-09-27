import React from "react";
import DefaultLayout from "Components/Layout/PageTemplates/Default";

import PageBanner from "Components/Shared/PageBanner";

import { Icon } from '@iconify/react';
import tickIcon from '@iconify/icons-subway/tick';

export default function AboutCarServicing() {
    return (
        <DefaultLayout>
        <div className="aboutCarServicing-area">
            <PageBanner
                overlay
                title="SERVICING DETAILS AND PRICING"
                caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula arcu, 
                tincidunt vitae porttitor vitae, cursus eu dolor. Nullam et felis ipsum. Vestibulum dapibus metus ligula, 
                vitae porttitor quam consectetur nec."
                bgImgUrl={"/static/service/serviceBanner.png"}
            />
             <div className="header-bar">
                <h6>CAR SERVICING DETAILS</h6>
            </div>
            <div className="section-title without-bg" align="center">
                <h2>CAR SERVICE PACKAGING TYPES</h2>
            </div>
            <div class="row packing-types">
                <div class="column" align="center">
                    <img src="/static/service/car_green.png" />
                    <h6>ASIAN CARS</h6>
                    <p>
                        from $85.00*<br />1.5hrs
                    </p>
                </div>
                <div class="column" align="center">
                    <img src="/static/service/car_purple.png" />
                    <h6>CONTINENTAL CARS</h6>
                    <p>
                        from $135.00*<br />1.5hrs
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <div className="section-title without-bg" align="center">
                    <h2 className="section-two-header">TYPES OF AVAILABLE CAR SERVICING</h2>
                </div>
                <div class="row available-services">
                    <div class="column box1">
                        <p><Icon className="tickIcon" icon={tickIcon} /> Regular Service</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Repairs</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Inspection</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Air-Conditioning</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Battery</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Belts</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Brakes</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Clutch &amp; Transmission</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Electrical System</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Engine</p>
                    </div>
                    <div class="column box2">
                        <p><Icon className="tickIcon" icon={tickIcon} /> Exhaust System</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Ignition System</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Lights &amp; Bulbs</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Oil Change</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Sensors</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Steering System</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Suspension System</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Wheel Alignment</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Windows &amp; Windscreen</p>
                        <p><Icon className="tickIcon" icon={tickIcon} /> Wiper System</p>
                    </div>
                </div>
                <div className="available-text">
                    <p>*Note: Final servicing fee and time required may vary depending on the type of services performed and brand of engine oil used.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem lorem, auctor non nisi et, facilisis accumsan ligula. Praesent euismod velit in dolor aliquet vestibulum. Nulla neque mi, posuere ut malesuada dignissim, tristique sit amet lorem. In eget nisi mollis, aliquam tortor a, egestas diam. Vestibulum mattis hendrerit nulla sit amet dictum. Sed imperdiet neque bibendum sollicitudin fermentum. Quisque ullamcorper nisi vel scelerisque condimentum.</p>
                    <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer interdum nisi sem, vel pretium ante varius blandit. Aenean dignissim ex ut dui lobortis, id vehicula ante efficitur. Mauris accumsan egestas tempor. Aliquam erat volutpat. Donec pharetra porta vulputate. Nulla facilisi. Vivamus pharetra, eros ut rhoncus ultricies, massa augue volutpat erat, in bibendum nisl est vitae neque. Quisque eu leo auctor massa vehicula faucibus id quis augue.</p>
                </div>
            </div>
        </div>
        </DefaultLayout>
    );
}