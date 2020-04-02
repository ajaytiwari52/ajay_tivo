import React, { Component } from "react";

export default class CustomerOtt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.fetchPackages();
  }

  fetchPackages() {
    fetch("data/addonServices.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then(json => {
        this.setState(json);
        console.log(this.state);
      });
  }

  renderChannel(channels) {
    return (
      <span className="badge badge-primary badge-pill">{channels.length}</span>
    );
  }

  renderTableData() {
    if (this.state.addonServicies != undefined) {
      return this.state.addonServicies.map((addOn, index) => {
        const { id, name, price, image } = addOn;
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td><img src={image} /></td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td>Loading...</td>
        </tr>
      );
    }
  }

  renderTableHeader() {
    if (this.state.addonServicies) {
      let header = Object.keys(this.state.addonServicies[0]);
      return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
      });
    } else {
      return <th>Loading...</th>;
    }
  }

  render() {
    return (
      <div className="row">
        <table id="packages" className="table table-bordered">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}
