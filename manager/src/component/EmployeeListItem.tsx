import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { CardSection } from "./common";
import { Employee } from "../store/reducers/EmployeeReducer";


interface EmployeeListItemProps {
  employee: Employee;
  onPress?: (employee: Employee) => void;
}

export const EmployeeListItem: FC<EmployeeListItemProps> = ({ employee, onPress }) => {
  const onRowPress = () => onPress && onPress(employee);

  return (
    <TouchableOpacity onPress={onRowPress}>
      <CardSection>
        <Text style={styles.title}>{ employee.name }</Text>
      </CardSection>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
})
