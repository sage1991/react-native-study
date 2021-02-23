import React, { FC } from "react";
import { CardSection, Input } from "./common";
import { Picker, StyleSheet, Text } from "react-native";
import { Shift } from "../store/model/Shift";
import { connect } from "react-redux";
import { EmployeeFormState } from "../store/reducers/EmployeeFormReducer";
import { UpdateEmployeeFormRequest } from "../store/actions";
import { StoreState } from "../store/reducers";
import { updateForm } from "../store/actions"


interface EmployeeFormProps extends EmployeeFormState {
  updateForm: (request: UpdateEmployeeFormRequest<keyof EmployeeFormState>) => void;
}

const EmployeeForm: FC<EmployeeFormProps> = (props) => {
  const {
    name, phone, shift,
    updateForm
  } = props;

  const onChangeText = (prop: keyof EmployeeFormState) => (value: string) => {
    updateForm({ prop, value });
  }

  return (
    <>
      <CardSection>
        <Input label="name"
               value={name}
               placeholder="Enter Name"
               onChangeText={onChangeText("name")} />
      </CardSection>
      <CardSection>
        <Input label="phone"
               value={phone}
               placeholder="Enter Phone"
               onChangeText={onChangeText("phone")} />
      </CardSection>
      <CardSection>
        <Text style={styles.pickerLabel}>Shift</Text>
        <Picker selectedValue={shift ? shift : Shift.Monday}
                onValueChange={onChangeText("shift")}
                style={styles.picker}>
          <Picker.Item label="Monday" value={Shift.Monday} />
          <Picker.Item label="Tuesday" value={Shift.Tuesday} />
          <Picker.Item label="Wednesday" value={Shift.Wednesday} />
          <Picker.Item label="Thursday" value={Shift.Thursday} />
          <Picker.Item label="Friday" value={Shift.Friday} />
          <Picker.Item label="Saturday" value={Shift.Saturday} />
          <Picker.Item label="Sunday" value={Shift.Sunday} />
        </Picker>
      </CardSection>
    </>
  );
}

const actions = { updateForm };
const mapStateToProps = ({ form }: StoreState) => ({ ...form });
const EmployeeFormWithConnect = connect(mapStateToProps, actions)(EmployeeForm);
export { EmployeeFormWithConnect as EmployeeForm };


const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "column"
  },
  picker: {
    flex: 3
  },
  pickerLabel: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
})
