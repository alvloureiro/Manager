import React from "react";
import { Router, Scene } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/employee/EmployeeList";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Login"
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
