/** @format */

import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { addCategory } from "../services/category";
class AddCategory extends Component {
  state = {
    tripType: "",
    description: "",
    amount: "",
  };
  onChnageDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  onChnageTripType = (e) => {
    this.setState({
      tripType: e.target.value,
    });
  };
  onChnageAmount = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    const category = {
      tripType: this.state.tripType,
      description: this.state.description,
      amount: this.state.amount,
    };
    try {
      const response = await addCategory(category);
      console.log(response.status);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Trip Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Tripe type"
            value={this.state.tripType}
            onChange={this.onChnageTripType}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            value={this.state.description}
            onChange={this.onChnageDescription}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Amount"
            value={this.state.amount}
            onChange={this.onChnageAmount}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddCategory;
