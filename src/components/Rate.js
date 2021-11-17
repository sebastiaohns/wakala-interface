import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import ScreenCmpt from "../components/ScreenCmpt";
import NavHeader from "../components/NavHeader";

import RatingSwiper from "./RatingSwiper";

import { SIZES } from "../consts/theme";

const Rate = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [rating, setRating] = useState("");
  const [userStars, setUserStars] = useState(5);
  const [numberOfTransactions, setNumberOfTransactions] = useState(180);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    if (route.params.operation == "TopUp") {
      setNewTitle("Rate your community");
    } else {
      setNewTitle("Support community");
    }
  }, []);

  function handleChange(newValue) {
    setRating(newValue);
  }

  return (
    <ScreenCmpt>
      <NavHeader showTitle={true} newTitle={newTitle} />
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.icon} />
          <View style={styles.starsIcons}>
            {[...Array(userStars)].map((e, i) => (
              <Entypo key={i} name="star" size={12} color="#4840BB" />
            ))}
            <Text style={styles.starsText}> {userStars}</Text>
          </View>
          <Text style={styles.transactionsText}>
            {numberOfTransactions} successful transactions
          </Text>
        </View>

        <View style={styles.reactionContainer}>
          <Text style={styles.text}>
            How was your experience with the community member?
          </Text>
          <RatingSwiper rating={rating} onChange={handleChange} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home Screen")}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenCmpt>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    marginVertical: SIZES.height > 700 ? 70 : 30,
    alignItems: "center",
    justifyContent: "space-between",
  },

  infoContainer: {
    width: "100%",
    alignItems: "center",
  },

  icon: {
    width: 59,
    height: 59,
    borderRadius: 30,
    backgroundColor: "#FF8CA1",
  },

  starsIcons: {
    flexDirection: "row",
    marginTop: 18,
  },

  starsText: {
    fontSize: 12,
    color: "#4840BB",
    fontFamily: "Inter_700Bold",
  },

  transactionsText: {
    fontSize: 14,
    color: "#333333",
    fontFamily: "Rubik_400Regular",
    marginTop: 10,
  },

  reactionContainer: {
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    color: "#333333",
    textAlign: "center",
    fontFamily: "Rubik_500Medium",
    marginBottom: 50,
  },

  button: {
    width: 150,
    height: 50,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    marginTop: 30,
  },

  buttonText: {
    fontSize: 18,
    color: "#4840BB",
    textAlign: "center",
    fontFamily: "Rubik_500Medium",
  },
});

export default Rate;
