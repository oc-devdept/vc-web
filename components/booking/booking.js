import React, { memo } from "react";
import DayPicker from "react-day-picker";
import { useCookies } from "react-cookie";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const Index = memo(
  ({
    _HandleDayChange,
    _HandleInputForm,
    model,
    timeslot,
    description,
    currentDate,
    Timeslot,
    _setItemTimeSlot,
    date
  }) => {
    return (
      <div className="d-flex flex-column">
        <div class="row">
          <div class="col-12 col-md-6 mb-3">
              <label>Your Car Model</label>
                    <input
                      type="text"
                      value={model}
                      onChange={e => _HandleInputForm("model", e.target.value)}
                      className="form-control"
                      placeholder="Enter your car model"
                      id="model"
                      name="model"
                    />
          </div>
          
          <div class="col-12 col-md-6 mb-3">
          <label>Description</label>
                  <input
                    type="text"
                    value={description}
                    onChange={e =>
                      _HandleInputForm("description", e.target.value)
                    }
                    className="form-control"
                    placeholder="Any additional enquiries?"
                    id="description"
                    name="description"
                  />
          </div>
          </div>
          <div class="row">
          <div class="col-12 col-md-3 mb-3">
          <label>Date</label>
                  <input
                    type="text"
                    value={currentDate}
                    onChange={() => console.log("Date!")}
                    className="form-control"
                    placeholder="Pick your date"
                    id="date"
                    name="date"
                  />
          </div>
          <div class="col-12 col-md-3 mb-3">          
          <label>Timeslot</label>
                    <select value={timeslot ? timeslot : ""} onChange={_setItemTimeSlot} className="form-control">
                    {Timeslot.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                 
          </div>
          <div class="col-12 col-md-6">
          <DayPicker
              selectedDays={[date]}
              onDayClick={_HandleDayChange}
              style={{ width: "50%" }}
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
            />
          </div>
          
          
          
          </div>          
      </div>
    );
  }
);

export default Index;

/*

<div className="d-flex flex-row">
            <div style={{ flex: 1, padding: 25 }}>
              <div className="d-flex flex-row flex-fill">
                <div
                  className="form-group d-flex flex-column"
                  style={{ flex: 0.5, marginRight: 25 }}
                >
                  <label>Your Car Model</label>
                  <input
                    type="text"
                    value={model}
                    onChange={e => _HandleInputForm("model", e.target.value)}
                    className="form-control"
                    placeholder="Enter your car model"
                    id="model"
                    name="model"
                  />
                </div>
              </div>

              <div className="d-flex flex-row flex-fill">
                <div
                  className="form-group d-flex flex-column"
                  style={{ flex: 0.5, marginRight: 25 }}
                >
                  <label>Date</label>
                  <input
                    type="text"
                    value={currentDate}
                    onChange={() => console.log("Date!")}
                    className="form-control"
                    placeholder="Pick your date"
                    id="date"
                    name="date"
                  />
                </div>

                <div
                  className="form-group d-flex flex-column"
                  style={{ flex: 0.5 }}
                >
                  <label>Timeslot</label>
                  

                  <FormControl>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={timeslot ? timeslot : ""}
                      onChange={_setItemTimeSlot}
                      style={{ minWidth: 100, marginLeft: 5 }}
                    >
                      {Timeslot.map((e, index) => {
                        return (
                          <MenuItem key={index} value={e}>
                            {e}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="d-flex flex-row flex-fill">
                <div
                  className="form-group d-flex flex-column"
                  style={{ flex: 1 }}
                >
                  <label>Description</label>
                  <input
                    type="text"
                    value={description}
                    onChange={e =>
                      _HandleInputForm("description", e.target.value)
                    }
                    className="form-control"
                    placeholder="Any additional enquiries?"
                    id="description"
                    name="description"
                  />
                </div>
              </div>
            </div>

            
          </div>
<DayPicker
              selectedDays={[date]}
              onDayClick={_HandleDayChange}
              style={{ width: "50%" }}
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
            />
*/
