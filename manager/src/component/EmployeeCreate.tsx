import React, { FC } from "react";
import { Button, Card, CardSection } from "./common";
import { Picker, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { createEmployee } from "../store/actions"
import { StoreState } from "../store/reducers";
import { EmployeeFormState } from "../store/reducers/EmployeeFormReducer";
import { EmployeeForm } from "./EmployeeForm";


interface EmployeeCreateProps extends EmployeeFormState {
  createEmployee: (form: EmployeeFormState) => void;
}

const EmployeeCreate: FC<EmployeeCreateProps> = (props) => {
  const { name, phone, shift, createEmployee } = props;
  const onCreateButtonPress = () => createEmployee({ name, phone, shift });

  return (
    <Card>
      <EmployeeForm />
      <CardSection style={styles.buttonContainer}>
        <Button onPress={onCreateButtonPress}>
          Add
        </Button>
      </CardSection>
    </Card>
  )
}


const actions = { createEmployee };
const mapStateToProps = ({ form }: StoreState) => ({ ...form });
const EmployeeCreateWithConnect = connect(mapStateToProps, actions)(EmployeeCreate);
export { EmployeeCreateWithConnect as EmployeeCreate };


const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "column"
  }
})
