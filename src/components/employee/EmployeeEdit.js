import React, { Component } from "react";
import { connect } from "react-redux";
import Communications from "react-native-communications";
import {
  employeeUpdate,
  employeeEdit,
  employeeEditSave,
  employeeDelete
} from "../../actions";
import { Card, CardSection, Button, ConfirmDialog } from "../common";
import EmployeeForm from "./EmployeeForm";

class EmployeeEdit extends Component {
  state = { showModal: false };

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

  onTextClick = () => {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcome shift is on ${shift}`);
  };

  onFireClick = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  onAcceptClick = () => {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  };

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonClick}>Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextClick}>Text employee</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onFireClick}>Fire</Button>
        </CardSection>

        <ConfirmDialog
          visible={this.state.showModal}
          onDecline={() => {
            this.setState({ showModal: !this.state.showModal });
          }}
          onAccept={this.onAcceptClick}
        >
          Are you sure you want to delete this?
        </ConfirmDialog>
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
  employeeEditSave,
  employeeDelete
})(EmployeeEdit);
