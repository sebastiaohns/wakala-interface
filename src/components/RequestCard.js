import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { SIZES } from "../consts/theme";

const RequestCard = () => {
  const [amount, setAmount] = useState("567.56");
  const [starsRate, setStarsRate] = useState("5.0");
  const [ratingsNumber, setRatingsNumber] = useState("245");

  return (
    <TouchableOpacity style={{ marginVertical: 5 }}>
      <LinearGradient
        colors={[
          "rgba(255, 140, 161, 0.08)",
          "rgba(252, 207, 47, 0.08)",
          "rgba(255, 255, 255, 0.08)",
          "rgba(248, 48, 180, 0.08)",
          "rgba(47, 68, 252, 0.08)",
        ]}
        start={[0, 1]}
        end={[1, 0]}
        style={styles.container}
      >
        <View style={styles.imageContainer}>
          <View style={styles.img} />
        </View>
        <View style={styles.requestInfoContainer}>
          <Text style={styles.title}>Deposit Request</Text>
          <Text style={styles.subTitle}>Amount</Text>
          <Text style={styles.amount}>Ksh {amount}</Text>
        </View>

        <View style={styles.moreInfoContainer}>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="star" size={14} color="#002B4E" />
            <Text
              style={[styles.subTitle, { color: "#002B4E", marginRight: 15 }]}
            >
              {" "}
              {starsRate}
            </Text>
            <Text style={[styles.subTitle, { color: "#133FDB" }]}>
              {ratingsNumber} Ratings
            </Text>
          </View>
          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.textButton}>View</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: SIZES.width * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 16,
  },

  imageContainer: {
    width: SIZES.width * 0.1,
    alignItems: "center",
    // backgroundColor: "#FF0000",
  },

  img: {
    width: 32,
    height: 32,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
  },

  title: {
    fontFamily: "Rubik_500Medium",
    color: "#002B4E",
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 10,
  },

  subTitle: {
    fontFamily: "Rubik_400Regular",
    color: "#333333",
    fontSize: 12,
  },

  amount: {
    fontFamily: "Rubik_500Medium",
    color: "#333333",
    fontSize: 18,
  },

  requestInfoContainer: {
    flexDirection: "column",
    width: SIZES.width * 0.4,
    // backgroundColor: "#00FF00",
  },

  moreInfoContainer: {
    flexDirection: "column",
    width: SIZES.width * 0.3,
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "#0000FF",
  },

  viewButton: {
    width: 100,
    height: 40,
    borderWidth: 0.65,
    borderColor: "#949494",
    borderRadius: 30,
    justifyContent: "center",
  },

  textButton: {
    fontFamily: "Inter_700Bold",
    color: "#1B40D7",
    fontSize: 12,
    textAlign: "center",
  },
});

export default RequestCard;
