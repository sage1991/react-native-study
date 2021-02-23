import React, { FC, useEffect, useState } from "react";
import { Button, Card, CardSection, Confirm } from "./common";
import { Picker, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { initForm, updateEmployee, clearForm, deleteEmployee } from "../store/actions"
import { StoreState } from "../store/reducers";
import { EmployeeFormState } from "../store/reducers/EmployeeFormReducer";
import { Employee } from "../store/reducers/EmployeeReducer";
import { EmployeeForm } from "./EmployeeForm";
import { Shift } from "../store/model/Shift";
import { text } from "react-native-communications";


interface EmployeeEditProps extends EmployeeFormState {
  initForm: (employee: Employee) => void;
  clearForm: () => void;
  updateEmployee: (employee: Employee) => void;
  deleteEmployee: (id: string) => void;
  employee: Employee;
}

const EmployeeEdit: FC<EmployeeEditProps> = (props) => {
  const {
    name,
    phone,
    shift,
    employee,
    initForm,
    clearForm,
    updateEmployee,
    deleteEmployee
  } = props;

  const [ visible, setVisible ] = useState<boolean>(false);

  useEffect(() => {
    initForm(employee);
    return () => clearForm();
  }, []);

  const onSaveButtonPress = () => {
    updateEmployee({
      id: employee.id,
      name,
      phone,
      shift: shift as Shift
    });
  }

  const onDeleteButtonPress = () => setVisible(true);
  const onTextButtonPress = () => text(phone, `Your upcoming shift is on ${shift}`);
  const onConfirm = () => deleteEmployee(employee.id);

  return (
    <Card>
      <EmployeeForm />
      <CardSection style={styles.buttonContainer}>
        <Button onPress={onSaveButtonPress}>
          Save Changes
        </Button>
      </CardSection>
      <CardSection style={styles.buttonContainer}>
        <Button onPress={onTextButtonPress}>
          Text Schedule
        </Button>
      </CardSection>
      <CardSection style={styles.buttonContainer}>
        <Button onPress={onDeleteButtonPress}>
          Delete
        </Button>
      </CardSection>
      <Confirm visible={visible}
               close={() => setVisible(false)}
               onConfirm={onConfirm}>
        Are you sure you want to delete this?
      </Confirm>
    </Card>
  )
}


const actions = { initForm, updateEmployee, clearForm, deleteEmployee };
const mapStateToProps = ({ form }: StoreState) => ({ ...form });
const EmployeeEditWithConnect = connect(mapStateToProps, actions)(EmployeeEdit);
export { EmployeeEditWithConnect as EmployeeEdit };


const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "column"
  }
})
