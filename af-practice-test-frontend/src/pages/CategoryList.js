/** @format */

import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { getCategory } from "../services/category";
class CategoryList extends Component {
  state = {
    category: [],
  };
  componentDidMount() {
    this.getAllCategory();
  }

  getAllCategory = async () => {
    try {
      const response = await getCategory();
      console.log(response.data);
      this.setState({ category: response.data || [] });
    } catch (e) {
      console.log(e);
    }
  };
  getByStatus = (id) => {
    this.props.history.push("/home/category-list-status/" + id);
  };
  CategoryList() {
    return this.state.category.map((currentCategory) => {
      return (
        <TableBody
          key={currentCategory.id}
          category={currentCategory}
          getByStatus={this.getByStatus}
        />
      );
    });
  }
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Trip Type</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.CategoryList()}</tbody>
      </Table>
    );
  }
}

export default CategoryList;
const TableBody = (props) => {
  return (
    <tr>
      <td>{props.category.tripType}</td>
      <td>{props.category.description}</td>
      <td>{props.category.amount}</td>
      <td>
        <Button
          variant="primary"
          onClick={() => {
            props.getByStatus(props.category.id);
          }}
        >
          view
        </Button>{" "}
      </td>
    </tr>
  );
};
