import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, Platform, StatusBar } from "react-native";

import colors from "../config/colors";

const StocksScreenHeader = ({ navigation }) => {
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
        style={{ top: 10, left: 5, ...styles.icon }}
      />
      <Text style={styles.headerText}> StockCharts </Text>
      <MaterialIcons
        name="settings"
        size={28}
        style={{ top: 10, right: 5, ...styles.icon }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
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
    top: 8,
  },
  icon: {
    color: colors.fifth,
    position: "absolute",
  },
});
export default StocksScreenHeader;
