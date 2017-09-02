import React from "react";
import { Router, Scene } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Login"
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employee List"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
