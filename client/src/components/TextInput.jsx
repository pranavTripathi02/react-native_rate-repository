import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({});

const TextInput = ({ style, error, ...props }) => {
  // console.log("here");
  // console.log(style, error);
  const textInputStyle = [style];

  return (
    <NativeTextInput
      style={textInputStyle}
      {...props}
    />
  );
};

export default TextInput;
