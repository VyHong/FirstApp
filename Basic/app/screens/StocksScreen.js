import {
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Text,
  StatusBar,
  Platform,
  TextInput,
  Button,
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
  const [search, setSearch] = useState("AAPL");
  const [timeFrame, setTimeFrame] = useState(0);

  async function fetchData(time, symbol) {
    let x_data = [];
    let y_data = [];
    const timeSetting = ["DAILY", "WEEKLY_ADJUSTED", "MONTHLY_ADJUSTED"];
    const timeSettingKey = [
      "Time Series (Daily)",
      "Weekly Adjusted Time Series",
      "Monthly Adjusted Time Series",
    ];
    const API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_${timeSetting[time]}&symbol=${symbol}&apikey=${API_KEY}`;
    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        console.log(data);
        let keys = Object.keys(data[timeSettingKey[time]]);
        for (let i = 0; i < 100; i++) {
          //var split = keys[i].split("-");
          x_data[i] = keys[i]; //month[parseInt(split[1], 10) - 1];
          y_data[i] = data[timeSettingKey[time]][keys[i]]["1. open"];
        }
        setData({ x_data, y_data });
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData(0, "AAPL");
  }, []);

  if (Object.keys(stockData).length === 0) return null;

  const state = {
    //labels: stockData["x_data"],
    datasets: [
      {
        data: stockData["y_data"],
        color: (opacity = 1) => `rgba(28, 33, 53, ${opacity})`,
        strokeWidth: 3,
        fontFamily: "helvetica",
      },
    ],
  };
  const timeText = ["Daily", "Weekly", "Monthly"];
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.chartTitle}>
          Data for {search} {timeText[timeFrame]}
        </Text>
      </View>

      <View style={styles.chartWithsearchContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search symbol"
            style={styles.search}
            onChangeText={(val) => {
              setSearch(val);
            }}
            onSubmitEditing={() => {
              console.log(`User searched for ${search}`);
              fetchData(2, search);
            }}
          />

          <View style={styles.buttons}>
            <Button
              onPress={() => {
                setTimeFrame(0);
                fetchData(0, search);
              }}
              color={colors.secondary}
              title="Day"
              disabled={timeFrame === 0}
            />
            <Button
              onPress={() => {
                setTimeFrame(1);
                fetchData(1, search);
              }}
              color={colors.secondary}
              title="Week"
              disabled={timeFrame === 1}
            />
            <Button
              onPress={() => {
                setTimeFrame(2);
                fetchData(2, search);
              }}
              color={colors.secondary}
              title="Month"
              disabled={timeFrame === 2}
            />
          </View>
        </View>

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
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.fifth,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
  chart: {
    backgroundGradientFrom: colors.white,
    backgroundGradientTo: colors.white,
    backgroundGradientFromOpacity: 0.1,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(28, 33, 53,${opacity})`, //automate color
    strokeWidth: 6, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    propsForLabels: {
      fontFamily: "helvetica",
    },
  },
  search: {
    backgroundColor: colors.white,
    shadowRadius: 10,
    borderRadius: 5,
    borderColor: colors.secondary,
    borderWidth: 0,
    borderRadius: 5,

    width: screenWidth * 0.2,
    fontSize: 15,
  },
  searchContainer: {
    height: 30,
    left: 0, //automate distances
    top: 0,
    alignSelf: "flex-start",
    width: screenWidth * 0.8,
    flexDirection: "row",
    //backgroundColor: colors.black,
  },
  buttons: {
    flexDirection: "row",
    backgroundColor: colors.fifth,
    position: "absolute",
    right: 0,
    borderRadius: 100,
  },
  chartTitle: {
    fontSize: 30,
    fontFamily: "helvetica",
    fontWeight: "bold",
    color: colors.secondary,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 30,
    bottom: 5,
  },

  chartWithsearchContainer: {
    padding: 40,
  },
});
export default StocksScreen;
