import React, { Component } from "react";
import CustomerTable from "./CustomerTable";
import CustomerOtt from "./CustomerOtt";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">Packages</div>
              <div className="card-body">
                <h5 className="card-title">
                  Total packages subscribed by customers.
                </h5>
                <div className="card-text">
                  <CustomerTable></CustomerTable>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-header">OTT</div>
              <div className="card-body">
                <h5 className="card-title">
                  OTT services subscribed by customers.
                </h5>
                <div className="card-text">
                  <CustomerOtt></CustomerOtt>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
