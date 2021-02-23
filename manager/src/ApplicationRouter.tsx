import React, { FC } from "react";
import { Scene, Router, Stack, Actions } from "react-native-router-flux";
import { LoginForm } from "./component/LoginForm";
import { EmployeeList } from "./component/EmployeeList";
import { StyleSheet } from "react-native";
import { EmployeeCreate } from "./component/EmployeeCreate";
import { EmployeeEdit } from "./component/EmployeeEdit";


export const ApplicationRouter: FC = () => {
  return (
    <Router sceneStyle={styles.scene}>
      <Stack key="root" hideNavBar>
        <Stack key="auth">
          <Scene key="login"
                 component={LoginForm}
                 title="Login"
                 navigationBarStyle={styles.navigation}
                 initial />
        </Stack>
        <Stack key="main">
          <Scene key="employees"
                 component={EmployeeList}
                 title="Employees"
                 rightTitle="Add"
                 onRight={() => Actions.add()}
                 navigationBarStyle={styles.navigation} />
          <Scene key="add"
                 component={EmployeeCreate}
                 title="Add Employee"
                 navigationBarStyle={styles.navigation} />
          <Scene key="edit"
                 component={EmployeeEdit}
                 title="Edit Employee"
                 navigationBarStyle={styles.navigation} />
        </Stack>
      </Stack>
    </Router>
  );
}


const styles = StyleSheet.create({
  scene: {
    backgroundColor: "#fefefe"
  },
  navigation: {
    backgroundColor: "#efefef"
  }
});
