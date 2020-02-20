import React, { useEffect, useReducer } from "react";
import { formatPrice } from "Components/Helpers/helpers";
import { Slider, withStyles } from "@material-ui/core";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const LoanCalculator = props => {
  // reducer to maintain state of inputs
  const initialState = {
    loanTerm: 24,
    loanAmount: "",
    interestRate: "",
    totalInterest: "",
    downPayment: "",
    deposit: 500,
    monthlyInstallment: ""
  };

  function reducer(state, { field, value }) {
    return {
      ...state,
      [field]: value
    };
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    loanTerm,
    loanAmount,
    interestRate,
    totalInterest,
    downPayment,
    deposit
  } = state;

  const onChange = e => {
    let { name, value } = e.target;
    if (typeof value === "string" && !!value) {
      value = parseFloat(value);
    }
    dispatch({ field: name, value: value });
  };

  const onSliderChange = (e, value) => {
    dispatch({ field: "loanTerm", value: value });
  };

  const handleCalculationClick = () => {
    const downPayment = props.productTotal.total - loanAmount;
    const totalInterest =
      (loanAmount * (interestRate / 100 + 1) - loanAmount) * (loanTerm / 12);
    const monthlyInstallment = (totalInterest + loanAmount) / loanTerm;
    dispatch({ field: "downPayment", value: downPayment });
    dispatch({ field: "totalInterest", value: totalInterest });
    dispatch({ field: "monthlyInstallment", value: monthlyInstallment });
  };

  // options to style input range slider
  const marks = [
    {
      value: 12,
      label: 12
    },
    {
      value: 24,
      label: 24
    },
    {
      value: 36,
      label: 36
    },
    {
      value: 48,
      label: 48
    },
    {
      value: 60,
      label: 60
    },
    {
      value: 72,
      label: 72
    },
    {
      value: 84,
      label: 84
    }
  ];

  const StyledSlider = withStyles({
    root: {
      color: "#4B6674",
      height: 5
    },
    track: {
      height: 5,
      borderRadius: 5
    },
    rail: {
      height: 5,
      borderRadius: 5
    },
    mark: {
      display: "none"
    },
    thumb: {
      width: 14,
      height: 14,
      backgroundColor: "#f29d30"
    },
    markLabel: {
      fontFamily: "Montserrat",
      fontWeight: 500
    },
    markLabelActive: {
      color: "#666666"
    }
  })(Slider);

  // Updates redux state on render if successful calculation has been made
  useEffect(() => {
    if (!!state.monthlyInstallment) {
      props.updateLoanCalculator(state);
    }
  }, [state]);

  // console.log("calculator state= ", state);
  return (
    <div className="calculator p-3">
      <div className="calculator-field row">
        <div className="field-name d-flex align-items-center col-5">
          <p>TOTAL CAR PRICE</p>
        </div>
        <div className="field-input col-7">
          <p>{formatPrice(props.productTotal.total)}</p>
        </div>
      </div>
      <div className="calculator-field row">
        <div className="field-name d-flex align-items-center col-5">
          <p style={{ lineHeight: 1.2 }}>
            LOAN TERM
            <br />
            <span style={{ fontSize: 10 }}>(MONTHS)</span>
          </p>
        </div>
        <div className="field-input col-7">
          {/* CAN REVISIT WHEN THERE IS TIME */}
          {/* controlled value in local state, but slider ui doesnt slide, hits  */}
          <StyledSlider
            min={12}
            max={84}
            step={12}
            marks={marks}
            name="loanTerm"
            value={loanTerm}
            onChangeCommitted={onSliderChange}
          />
          {/* slider ui works as expected, but value uncontrolled in local state */}
          {/* <StyledSlider
            defaultValue={24}
            min={12}
            max={84}
            step={12}
            marks={marks}
            name='loanTerm'
          /> */}
        </div>
      </div>
      <div className="calculator-field row">
        <div className="field-name d-flex align-items-center col-5">
          <p>LOAN AMOUNT</p>
        </div>
        <div className="field-input col-7">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text
                style={{
                  border: "1px solid #4B6674",
                  borderRight: 0,
                  borderRadius: 0,
                  backgroundColor: "transparent",
                  fontSize: 14,
                  fontWeight: 600,
                  height: 35
                }}
              >
                $
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="loanAmount"
              type="number"
              placeholder="Enter loan amount here"
              aria-label="Enter loan amount here"
              style={{
                border: "1px solid #4B6674",
                borderLeft: 0,
                backgroundColor: "transparent",
                paddingLeft: 0,
                height: 35
              }}
              value={loanAmount}
              onChange={onChange}
            />
          </InputGroup>
        </div>
      </div>
      <div className="calculator-field row">
        <div className="field-name d-flex align-items-center col-5">
          <p style={{ lineHeight: 1.2 }}>
            INTEREST RATE
            <br />
            <span style={{ fontSize: 10 }}>(PER ANNUM)</span>
          </p>
        </div>
        <div className="field-input col-7">
          <InputGroup>
            <FormControl
              name="interestRate"
              type="number"
              placeholder="Enter interest rate here"
              aria-label="Enter interest rate here"
              value={interestRate}
              onChange={onChange}
              style={{
                border: "1px solid #4B6674",
                borderRight: 0,
                backgroundColor: "transparent",
                height: 35
              }}
            />
            <InputGroup.Append>
              <InputGroup.Text
                style={{
                  border: "1px solid #4B6674",
                  borderLeft: 0,
                  borderRadius: 0,
                  backgroundColor: "transparent",
                  fontSize: 14,
                  fontWeight: 600,
                  height: 35
                }}
              >
                %
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>

      <div className="calculator-field row">
        <div className="field-name d-flex align-items-center col-5">
          <p>DOWN PAYMENT</p>
        </div>
        <div className="field-input col-7">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text
                style={{
                  border: "1px solid #4B6674",
                  borderRight: 0,
                  borderRadius: 0,
                  backgroundColor: "#e5e5e5",
                  fontSize: 14,
                  fontWeight: 600,
                  height: 35
                }}
              >
                $
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="downPayment"
              aria-label="Down payment"
              style={{
                border: "1px solid #4B6674",
                borderLeft: 0,
                backgroundColor: "#e5e5e5",
                paddingLeft: 0,
                height: 35
              }}
              value={!!downPayment ? formatPrice(downPayment).slice(1) : ""}
              onChange={onChange}
              disabled
            />
          </InputGroup>
        </div>
      </div>
      <div className="calculator-field row">
        <div className="field-name d-flex align-items-center col-5">
          <p>TOTAL INTEREST</p>
        </div>
        <div className="field-input col-7">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text
                style={{
                  border: "1px solid #4B6674",
                  borderRight: 0,
                  borderRadius: 0,
                  backgroundColor: "#e5e5e5",
                  fontSize: 14,
                  fontWeight: 600,
                  height: 35
                }}
              >
                $
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="interestAmount"
              aria-label="Interest Amount"
              style={{
                border: "1px solid #4B6674",
                borderLeft: 0,
                backgroundColor: "#e5e5e5",
                paddingLeft: 0,
                height: 35
              }}
              value={!!totalInterest ? formatPrice(totalInterest).slice(1) : ""}
              onChange={onChange}
              disabled
            />
          </InputGroup>
        </div>
      </div>
      <div className="calculator-field row">
        <div className="field-name d-flex align-items-center  col-5">
          <p>DEPOSIT</p>
        </div>
        <div className="field-input col-7">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text
                style={{
                  border: "1px solid #4B6674",
                  borderRight: 0,
                  borderRadius: 0,
                  backgroundColor: "#e5e5e5",
                  fontSize: 14,
                  fontWeight: 600,
                  height: 35
                }}
              >
                $
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="deposit"
              aria-label="Deposit"
              style={{
                border: "1px solid #4B6674",
                borderLeft: 0,
                backgroundColor: "#e5e5e5",
                paddingLeft: 0,
                height: 35
              }}
              value={formatPrice(deposit).slice(1)}
              onChange={onChange}
              disabled
            />
          </InputGroup>
        </div>
      </div>
      <div className="calculator-submit row justify-content-center">
        {!!loanAmount && !!interestRate ? (
          <Button onClick={handleCalculationClick}>Calculate</Button>
        ) : (
          <Button onClick={handleCalculationClick} disabled>
            Calculate
          </Button>
        )}
      </div>
    </div>
  );
};

export default LoanCalculator;
