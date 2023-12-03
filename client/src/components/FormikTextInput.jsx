import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  errorText: {
    // marginTop: 2,
    // marginBottom: 10,
    color: "red",
  },
  inputStyleError: {
    border: "1px solid red",
  },
  inputStyle: {
    marginTop: 10,
    padding: 5,
    paddingHorizontal: 10,
    border: "1px solid grey",
    borderRadius: 2,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  // console.log(name, props);
  const [field, meta, helpers] = useField(name);
  // console.log(field, meta, helpers);
  const showError = meta.touched && meta.error;

  const textInputStyle = [
    styles.inputStyle,
    showError && styles.inputStyleError,
  ];

  return (
    <>
      <TextInput
        style={textInputStyle}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
