/** @format */

import React, { Component } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { getAllVehicle } from "../services/vehicle";
class VehicleList extends Component {
  state = {
    vehicle: [],
  };
  componentDidMount() {
    this.getVehicles();
  }

  getVehicles = async () => {
    try {
      const response = await getAllVehicle();
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
            <th>Add KM</th>
            <th>Action</th>
            <th>Cost(rs)</th>
          </tr>
        </thead>
        <tbody>{this.VehicleList()}</tbody>
      </Table>
    );
  }
}

export default VehicleList;
class TableBody extends Component {
  state = {
    km: "",
    total: "",
  };
  onChangeKm = (e) => {
    this.setState({
      km: e.target.value,
    });
  };
  calculateCost = (amount) => {
    this.setState({ total: amount * this.state.km });
  };
  render() {
    return (
      <tr>
        <td>{this.props.vehicle.code}</td>
        <td>{this.props.vehicle.model}</td>
        <td>{this.props.vehicle.type}</td>
        <td>{this.props.vehicle.name}</td>
        <td>{this.props.vehicle.category.tripType}</td>
        <td>
          {" "}
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Kilo meters"
              value={this.state.km}
              onChange={this.onChangeKm}
            />
          </Form.Group>
        </td>
        <td>
          <Button
            variant="success"
            onClick={() => {
              this.calculateCost(this.props.vehicle.category.amount);
              console.log(this.props.vehicle);
            }}
          >
            calculate
          </Button>{" "}
        </td>
        <td>{this.state.total}</td>
      </tr>
    );
  }
}
