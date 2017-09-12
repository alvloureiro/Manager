import React, { Component } from "react";
import { Picker, Text } from "react-native";
import { connect } from "react-redux";
import {
  employeeUpdate,
  employeeCreate,
  employeeCreateInit
} from "../../actions";
import { Card, CardSection, Input, Button } from ".././common";
import EmployeeForm from "./EmployeeForm";

class EmployeeCreator extends Component {
  componentWillMount() {
    this.props.employeeCreateInit();
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  };

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
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
  employeeCreate,
  employeeCreateInit
})(EmployeeCreator);
