import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import { useNavigate } from "react-router-native";
import { ScrollView } from "react-native-web";

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    // gap: 10,
    paddingTop: Constants.statusBarHeight,
    // paddingBottom: 20,
    // paddingLeft: 2,
    backgroundColor: theme.colors.appBar,
    // fontWeight: theme.fontWeights.bold,
    // alignItems: "center",
    // border: "1px solid red",
  },
  tabsContainer: {},
  tab: {
    fontWeight: theme.fontWeights.bold,
    textTransform: "capitalize",
    color: "white",
    margin: 10,
  },
});

const AppBarTab = ({ title, path }) => {
  const navigate = useNavigate();
  return (
    <Pressable
      onPress={() => {
        navigate(path);
      }}
    >
      <Text style={styles.tab}>{title}</Text>
    </Pressable>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.tabsContainer}
      >
        <AppBarTab
          title="Repositories"
          path="/"
        />
        <AppBarTab
          title="Sign-in"
          path="/sign-in"
        />
      </ScrollView>
    </View>
  );
};

export default AppBar;
