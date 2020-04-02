import React, { Component } from "react";

export default class Search extends Component {
  state = {
    customer: "",
    customers: "",
    customerDetail: {},
    packages: {},
    subscribedPackages: []
  };

  search = () => {
    let c = this.state.customers.filter(cust => {
      return (
        cust.personalInfo.name.toLowerCase() ==
        this.state.customer.toLocaleLowerCase()
      );
    });
    this.setState({ customerDetail: c[0] });
    let packs = c[0].package.split(",");
    let custPack = [];
    packs.forEach(item=> {
        this.state.packages.map(pack => {
            if(pack.packageId==item) {
                custPack.push(pack.name);
            }
        })
    })
    custPack.join(" ");
    this.setState({subscribedPackages: custPack})
  };

  componentDidMount() {
    this.fetchCustomers();
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
        this.setState({packages: json.packages});
      });
  };

  fetchCustomers = () => {
    fetch("data/customerInfo.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          customers: json.customerInfo
        });
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search customer"
                value={this.state.customer}
                onChange={e => this.setState({ customer: e.target.value })}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={this.search}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col">
            <div className="card" style={{ marginTop: "15px" }}>
              <div className="card-header">Customer details</div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-2 float-left">Name</div>
                  <div className="col-sm-8">
                    {this.state.customerDetail.personalInfo &&
                      this.state.customerDetail.personalInfo.name}
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-2 float-left">Packages</div>
                  <div className="col-sm-8">
                    {this.state.subscribedPackages.toString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
