import React from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Text,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

function DrawerContent(props) {
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({});

export default DrawerContent;
