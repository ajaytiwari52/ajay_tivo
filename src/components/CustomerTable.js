import React, { Component } from "react";

export default class CustomerTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.fetchPackages();
  }

  fetchPackages() {
    fetch("data/packages.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then(json => {
        this.setState(json);
      });
  }

  renderChannel(channels) {
    return (
      <span className="badge badge-primary badge-pill">{channels.length}</span>
    );
  }

  renderChannelName(channels) {
    var title = "";
    channels.map(channel => {
      title += channel.name + "\n"
    });
    return title;
  }

  renderTableData() {
    if (this.state.packages != undefined) {
      return this.state.packages.map((pack, index) => {
        const { name, price, packageId } = pack;
        return (
          <tr key={packageId}>
            <td>{packageId}</td>
            <td>{name}</td>
            <td>
              <ul title={this.renderChannelName(pack.channel)} style={{cursor: "pointer"}}>
                {this.renderChannel(pack.channel)}
              </ul>
            </td>
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
    if (this.state.packages) {
      let header = ["Id", "Name", "Channels"];
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
