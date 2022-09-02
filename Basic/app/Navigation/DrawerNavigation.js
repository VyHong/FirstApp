import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TestScreen from "../screens/TestScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import StocksScreen from "../screens/StocksScreen";
import Header from "./Header";
import DrawerContent from "./DrawerContent";
import colors from "../config/colors";
const Drawer = createDrawerNavigator();

function DrawerNavigation(props) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: colors.third,
        drawerLabelStyle: { color: colors.fifth },
        drawerStyle: { width: 300 },
      }}
    >
      <Drawer.Screen
        name="Stocks"
        component={StocksScreen}
        options={{
          header: ({ navigation, route }) => (
            <Header navigation={navigation} route={route} />
          ),
        }}
      />
      <Drawer.Screen
        name="Test"
        component={TestScreen}
        options={{
          header: ({ navigation, route }) => (
            <Header navigation={navigation} route={route} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
