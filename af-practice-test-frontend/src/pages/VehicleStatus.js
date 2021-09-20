/** @format */

import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { getByStatus } from "../services/vehicle";
class VehicleStatus extends Component {
  state = {
    vehicle: [],
  };
  componentDidMount() {
    this.getVehicles();
  }

  getVehicles = async () => {
    try {
      const response = await getByStatus(this.props.match.params.id);
      console.log(response.data);
      this.setState({ vehicle: response.data || [] });
    } catch (e) {
      console.log(e);
    }
  };
  VehicleList() {
    return this.state.vehicle.map((currentVehicle) => {
      return <TableBody key={currentVehicle.id} vehicle={currentVehicle} />;
    });
  }
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Code</th>
            <th>Model</th>
            <th>Type</th>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{this.VehicleList()}</tbody>
      </Table>
    );
  }
}

export default VehicleStatus;
const TableBody = (props) => {
  return (
    <tr>
      <td>{props.vehicle.code}</td>
      <td>{props.vehicle.model}</td>
      <td>{props.vehicle.type}</td>
      <td>{props.vehicle.name}</td>
      <td>{props.vehicle.category.tripType}</td>
    </tr>
  );
};
