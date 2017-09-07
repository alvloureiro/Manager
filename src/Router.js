import React from "react";
import { Router, Scene, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/employee/EmployeeList";
import EmployeeCreator from "./components/employee/EmployeeCreator";
import EmployeeEdit from "./components/employee/EmployeeEdit";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employee List"
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            initial
          />

          <Scene
            key="employeeCreate"
            component={EmployeeCreator}
            title="Create Employee"
          />

          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Employee Edit"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
