import {
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Text,
  StatusBar,
  Platform,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import APIkey from "../config/APIKey";
import colors from "../config/colors";
import StocksScreenHeader from "../Navigation/Header";
const API_KEY = APIkey.APIkey;

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const StocksScreen = (navigation) => {
  const [stockData, setData] = useState({});

  async function fetchData(time, symbol) {
    let x_data = [];
    let y_data = [];
    const timeSetting = ["DAILY", "WEEKLY_ADJUSTED", "MONTHLY_ADJUSTED"];
    const API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_${timeSetting[time]}&symbol=${symbol}&apikey=${API_KEY}`;
    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        let keys = Object.keys(data["Monthly Adjusted Time Series"]);
        for (let i = 0; i < 12; i++) {
          var split = keys[i].split("-");
          x_data[i] = month[parseInt(split[1], 10) - 1];
          y_data[i] = data["Monthly Adjusted Time Series"][keys[i]]["1. open"];
        }
        setData({ x_data, y_data });
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchData(2, "IBM");
  }, []);

  if (Object.keys(stockData).length === 0) return null;

  const state = {
    labels: stockData["x_data"],
    datasets: [
      {
        data: stockData["y_data"],
        color: (opacity = 1) => `rgba(28, 33, 53, ${opacity})`,
        strokeWidth: 3,
        fontFamily: "helvetica",
      },
    ],
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={state}
        width={screenWidth * 0.8}
        height={screenHeight * 0.4}
        chartConfig={styles.chart}
        fromZero={false}
        style={{
          marginVertical: 8,
          borderRadius: 5,
          shadowRadius: 10,
          opacity: 0.5,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  chart: {
    backgroundGradientFrom: colors.fifth,
    backgroundGradientTo: colors.fifth,

    color: (opacity = 1) => `rgba(28, 33, 53,${opacity})`, //automate color
    strokeWidth: 6, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    propsForLabels: {
      fontFamily: "helvetica",
    },
  },
});
export default StocksScreen;
