/** @format */

import React, { Component } from "react";
import { getCategory } from "../services/category";
import { addVehicle } from "../services/vehicle";
import { Form, Button } from "react-bootstrap";
class AddVehicle extends Component {
  state = {
    code: "",
    model: "",
    type: "",
    name: "",
    category: [],
    category1: [],
    tripType: "",
  };

  componentDidMount() {
    this.fetchCategory();
  }

  fetchCategory = async () => {
    try {
      const response = await getCategory();

      if (response.data.length > 0) {
        this.setState({
          category: response.data || [],
          //  tripType: response.data[0].tripType,
        });
      }
      console.log(this.state.category);
    } catch (ex) {
      // error handling
    }
  };
  onChnageType = (e) => {
    this.setState({
      type: e.target.value,
    });
  };
  onChnageModel = (e) => {
    this.setState({
      model: e.target.value,
    });
  };
  onChnageCode = (e) => {
    this.setState({
      code: e.target.value,
    });
  };
  onChnageName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onChanageTripType = (e) => {
    this.setState({
      tripType: e.target.value,
    });
    setTimeout(() => {
      console.log(this.state.tripType);
      const selectedCategory = this.state.category.filter(
        (item) => item.tripType === e.target.value
      );
      this.setState({
        category1: selectedCategory[0],
      });
    }, 1000);
  };
  onSubmit = async (e) => {
    e.preventDefault();
    const vehicle = {
      name: this.state.name,
      code: this.state.code,
      model: this.state.model,
      type: this.state.type,
      category: this.state.category1,
    };
    try {
      const response = await addVehicle(vehicle);
      console.log(response.status);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Vehicel Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter vehicle code"
            value={this.state.code}
            onChange={this.onChnageCode}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Vehicle Modle</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter vehicle model"
            value={this.state.model}
            onChange={this.onChnageModel}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Vehicle type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter vehicle Type"
            value={this.state.type}
            onChange={this.onChnageType}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Vehicel Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Vehicle Name"
            value={this.state.name}
            onChange={this.onChnageName}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            placeholder="Enter Category"
            value={this.state.tripType}
            onChange={this.onChanageTripType}
          >
            <option>Select category</option>
            {this.state.category.map(function (category) {
              return (
                <option key={category.tripType} value={category.tripType}>
                  {category.tripType}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddVehicle;
