import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
  Platform,
  Dimensions,
  StatusBar,
  ImageBackground,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

function TestScreen({ navigation }) {
  let x = 0;

  const [buttonText, setButtonText] = useState("Press");
  useEffect(() => {
    setButtonText("push");
  }, []);

  console.log(buttonText);

  const orientation = useDeviceOrientation();
  function handlePress() {
    setButtonText("Pressed");
  }

  return (
    <View style={styles.container}>
      {/*
        <Image style={styles.logosize} source={require("../assets/icon.png")} />
      
      <View
        style={{
          height:
            orientation.landscape && !Platform.OS === "web" ? "100%" : " 7%",
          ...styles.topbanner,
        }}
      >
        
        <Text
          onPress={() => console.log(`clicked ${++x}`)}
          style={styles.headerText}
        >
          Homepage
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "grey",
          width: 100,
          height: 100,
          alignSelf: "center",
        }}
      />
      <Image
        source={{
          style: styles.photo,
          uri: "https://picsum.photos/200/300",
        }}
      />
      <Button onPress={handlePress} color="dodgerblue" title="click me">
        {buttonText}
      </Button>*/}
      <TouchableHighlight onPress={() => navigation.navigate("Stocks")}>
        <View style={styles.midBox}>
          <Text>hallo</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
  logosize: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    alignSelf: "center",
    paddingStart: 10,
    top: 10,
    left: 2,
  },
  headerText: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 20,
    color: "white",
  },
  topbanner: {
    backgroundColor: "#bef6f7",
    width: "100%",
    flexDirection: "row",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  midBox: {
    height: 200,
    width: 200,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TestScreen;
