import React, { FC, useEffect } from "react";
import { FlatList, Text } from "react-native";
import { connect } from "react-redux";
import { fetchEmployees } from "../store/actions/employee";
import { StoreState } from "../store/reducers";
import { Employee } from "../store/reducers/EmployeeReducer";
import { EmployeeListItem } from "./EmployeeListItem";
import { Actions } from "react-native-router-flux";


interface EmployeeListProps {
  employees: Employee[];
  fetchEmployees: () => void;
}

const EmployeeList: FC<EmployeeListProps> = (props) => {
  const { employees, fetchEmployees } = props;

  useEffect(() => {
    fetchEmployees();
  }, []);

  const onPressEmployeeListItem = (employee: Employee) => {
    Actions.edit({ employee });
  }

  return (
    <FlatList data={employees}
              renderItem={({ item }) => <EmployeeListItem employee={item} onPress={onPressEmployeeListItem} />}
              keyExtractor={item => item.id} />
  );
}

const actions = { fetchEmployees };
const mapStateToProps = (state: StoreState) => ({ employees: state.employees });

const EmployeeListWithConnect = connect(mapStateToProps, actions)(EmployeeList);

export { EmployeeListWithConnect as EmployeeList };
