import "react-native-gesture-handler";
import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TestScreen from "./app/screens/TestScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import StocksScreen from "./app/screens/StocksScreen";
import StocksScreenHeader from "./app/Navigation/Header";
import DrawerNavigation from "./app/Navigation/DrawerNavigation";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
