import React, { useState, useEffect } from "react";
import PaymentList from "./components/PaymentList";
import { useSelector } from "react-redux";

import api from "Api";

import RctSectionLoader from "Components/RctSectionLoader";

const Index = () => {
  const [state, setState] = useState({ loading: false, tableData: [] });
  const custId = useSelector(state => state.UserState.customerId);

  useEffect(() => {
    setState({ loading: true });
    try {
      getTransaction();
    } catch (error) {
      setState({ loading: false });
    }
  }, []);

  async function getTransaction() {
    const result = await api.get(`/customers/${custId}/transaction`);
    setState({ loading: false, tableData: result.data });
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="d-flex flex-fill justify-content-center mt-5">
            <span>Payment Logs</span>
          </div>
          <div
            className="rct-block"
            style={{
              margin: 20,
              borderRadius: 10,
              boxShadow:
                "0 5px 9px 0 rgba(0,0,0,0.15), 0 8px 25px 0 rgba(0,0,0,0.15)"
            }}
          >
            {state.loading && <RctSectionLoader />}
            <PaymentList tableData={state.tableData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
