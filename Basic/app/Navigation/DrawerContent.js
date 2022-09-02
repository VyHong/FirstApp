import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { DrawerItemList } from "@react-navigation/drawer";

import colors from "../config/colors";

function DrawerContent(props) {
  return (
    <ScrollView style={styles.ScrollView}>
      <ImageBackground
        source={require("../assets/violetBack.jpg")}
        style={styles.containerImage}
      >
        <Image
          source={require("../assets/Logo.png")}
          style={styles.profilePic}
        ></Image>
      </ImageBackground>
      <View style={styles.container}>
        <DrawerItemList {...props} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  containerImage: {
    width: 300,
    height: 200,
  },
  ScrollView: {
    flex: 1,
  },
  profilePic: {
    width: 100,
    height: 100,
    backgroundColor: colors.fifth,
    top: 20,
    left: 20,
  },
});

export default DrawerContent;
