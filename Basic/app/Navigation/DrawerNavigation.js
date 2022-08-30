import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TestScreen from "../screens/TestScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import StocksScreen from "../screens/StocksScreen";
import StocksScreenHeader from "./Header";
import DrawerContent from "./DrawerContent";
const Drawer = createDrawerNavigator();

function DrawerNavigation(props) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContent {...props} initialRouteName="Stocks" />
      )}
    >
      <Drawer.Screen
        name="Stocks"
        component={StocksScreen}
        options={{
          header: ({ navigation }) => (
            <StocksScreenHeader navigation={navigation} />
          ),
        }}
      />
      <Drawer.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ title: "Welcome" }}
      />

      <Drawer.Screen name="Test" component={TestScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
