import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, CardSection, Input, Button } from ".././common";

class EmployeeCreator extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Name" placeHolder="Jane" />
        </CardSection>
        <CardSection>
          <Input label="Phone" placeHolder="555-555-5555" />
        </CardSection>
        <CardSection />
        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreator;
