import React from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Text,
  ImageBackground,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import colors from "../config/colors";
function DrawerContent(props) {
  return (
    <View>
      <View>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={styles.container}
        >
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
      <View style={styles.containerTop}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    color: "red",
  },
  containerTop: {
    flex: 1,
    width: 300,
    justifyContent: "flex-end",
    backgroundColor: colors.primary,
    height: "100%",
  },
});

export default DrawerContent;
