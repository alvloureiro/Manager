import React, { Component } from "react";
import { connect } from "react-redux";
import { employeeUpdate, employeeEdit, employeeEditSave } from "../../actions";
import { Card, CardSection, Button } from "../common";
import EmployeeForm from "./EmployeeForm";

class EmployeeEdit extends Component {
  componentWillMount() {
    this.props.employeeEdit(this.props.employee);
  }

  onButtonClick = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeEditSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  };

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonClick}>Save Changes</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeEdit,
  employeeEditSave
})(EmployeeEdit);
