import React, { Component } from "react";
import "./Customer.scss";

export default class Customer extends Component {
  state = {
    firstName: "",
    lastName: "",
    address: "",
    packages: [],
    selectedPackage: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    this.fetchPackages();
  }

  fetchPackages = () => {
    fetch("data/packages.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then(json => {
        let packages = json.packages.map(pack => {
          return { value: pack.name, display: pack.name };
        });
        this.setState({
          packages: [
            { value: "", display: "(Select your favourite package)" }
          ].concat(packages)
        });
      });
    console.log(this.state.packages);
  };

  save = () => {
    alert(JSON.stringify(this.state));
  };

  handlePackage = () => {};

  render() {
    return (
      <div className="container">
        <div className="card" style={{ padding: "15px" }}>
          <div className="card-header" style={{ marginBottom: "15px" }}>
            Registration Form
          </div>
          <form>
            <div className="form-group row">
              <div className="col-sm-6">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  id="inputFirstname"
                  placeholder="First name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  id="inputLastname"
                  placeholder="Last name"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  id="inputAddressLine1"
                  placeholder="Street Address"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-6">
                <select
                  className="form-control"
                  value={this.state.selectedPackage}
                  onChange={(e) => this.setState({selectedPackage: e.target.value})}
                >
                  {this.state.packages.map(pack => (
                    <option key={pack.value} value={pack.value}>
                      {pack.display}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary px-4 float-right"
              onClick={this.save}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
