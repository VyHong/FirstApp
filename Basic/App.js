import { StatusBar } from "expo-status-bar";
import { useState, React } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
  Platform,
  Dimensions,
} from "react-native";
import { useDimension } from "@react-native-community/hooks";

export default function App() {
  let x = 0;
  const [buttonText, setButtonText] = useState("Press");
  let Dimension = Dimensions.get("screen");
  console.log(Dimension, );
  function handlePress() {
    setButtonText("Pressed");
  }

  return (
    <View style={styles.container}>
      <Text onPress={() => console.log(`clicked ${++x}`)}>Landing Page </Text>

      <TouchableHighlight onPress={() => console.log("clicked ", ++x)}>
        <Image style={styles.logosize} source={require("./assets/icon.png")} />
      </TouchableHighlight>

      <Button onPress={handlePress} color="dodgerblue" title="click me">
        {buttonText}
      </Button>

      <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
      <View style={styles.subpart} />
      {/*<View>style={styles.subpart}</View>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar. : 0,
  },
  logosize: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  subpart: {
    backgroundColor: "red",
    height: "40%",
  },
});
