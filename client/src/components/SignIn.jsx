import { View, Pressable, Text } from "react-native";
// import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import * as yup from "yup";
import { StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  signinBtn: {
    backgroundColor: theme.colors.primary,
    marginTop: 10,
    padding: 10,
  },
  signinForm: {
    marginHorizontal: 20,
  },
  signinText: {
    color: "white",
    textAlign: "center",
    textTransform: "capitalize",
    borderRadius: 10,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("password is required"),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.signinForm}>
      <FormikTextInput
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <Pressable
        style={styles.signinBtn}
        onPress={onSubmit}
      >
        <Text style={styles.signinText}>sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const handleSignIn = (values) => {
    console.log("signing in", values);
  };
  const initialValues = {
    username: "",
    password: "",
  };
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSignIn}
        validationSchema={validationSchema}
      >
        {/* <SignInForm /> */}
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
