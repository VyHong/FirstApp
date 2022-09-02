import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";

import colors from "../config/colors";

const Header = ({ navigation, route }) => {
  console.log(navigation.constructor.name);
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={{ top: 14, left: 5, ...styles.icon }}
      />
      <Text style={styles.headerText}>{route["name"]} </Text>
      <MaterialIcons
        name="settings"
        size={28}
        style={{ top: 14, right: 5, ...styles.icon }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    backgroundColor: colors.secondary,
    flexDirection: "row",
    justifyContent: "center",
    shadowRadius: 10,
    paddingTop: 30,
  },
  headerText: {
    fontSize: 30,
    fontFamily: "helvetica",
    color: colors.fifth,
    position: "absolute",
    top: 12,
  },
  icon: {
    color: colors.fifth,
    position: "absolute",
  },
});
export default Header;
