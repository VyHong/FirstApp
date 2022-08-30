import { useState, React } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableHighlight,
} from "react-native";

import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/Stockexchange3.jpg")}
      style={styles.container}
    >
      <TouchableHighlight onPress={() => navigation.navigate("Drawer")}>
        <View style={styles.profileButton}>
          <Text style={styles.profileName}>Stocks</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("Test")}>
        <View
          style={{
            ...styles.profileButton,
            backgroundColor: colors.secondary,
          }}
        >
          <Text style={styles.profileName}>Cryptocurrencies</Text>
        </View>
      </TouchableHighlight>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: colors.primary,
    height: "100%",
  },
  profileButton: {
    height: 50,
    width: "100%",
    backgroundColor: colors.third,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 5,
  },
  profileName: {
    fontSize: 20,
    color: colors.fifth,
    fontWeight: "bold",
    fontFamily: "helvetica",
  },
});

export default WelcomeScreen;
