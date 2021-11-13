import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import NavHeader from "../../components/NavHeader";
import ScreenCmpt from "../../components/ScreenCmpt";

const Success = ({ navigation }) => {
  return (
    <ScreenCmpt>
      <View
        style={{
          flex: 1,
          marginHorizontal: 30,
          justifyContent: "space-between",
        }}
      >
        <NavHeader />

        <View>
          <Ionicons
            name="checkmark-circle"
            size={36}
            color="#4840BB"
            style={{ textAlign: "center", marginBottom: 12 }}
          />
          <Text style={styles.title}>Transaction Successful!</Text>
          <Text style={styles.text}>
            Your cUSD has been deposited to your wallet.
          </Text>
        </View>

        <TouchableOpacity
          style={navStyles.buttonShadow}
          onPress={() => navigation.navigate("Home")}
        >
          <LinearGradient
            colors={["rgba(183, 0, 76, 0.3)", "rgba(19, 63, 219, 1)"]}
            start={[1, 0]}
            end={[0, 1]}
            style={navStyles.button}
          >
            <Text style={navStyles.buttonText}>Okay</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScreenCmpt>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  nav: {
    width: "100%",
    height: 80,
    marginLeft: 5,
  },

  title: {
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
    lineHeight: 24,
    color: "#4840BB",
    textAlign: "center",
    marginBottom: 24,
  },

  text: {
    fontSize: 14,
    fontFamily: "Rubik_400Regular",
    lineHeight: 21,
    color: "#333333",
    marginBottom: 37,
  },

  card: {
    height: 230,
    width: "100%",
    borderRadius: 16,
    backgroundColor: "#FFF",
    paddingHorizontal: 8,
    paddingVertical: 20,
  },

  cardSubTitle: {
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
    lineHeight: 24,
    color: "#A2A3A2",
  },

  cardTitle: {
    fontSize: 28,
    fontFamily: "Rubik_700Bold",
    lineHeight: 34,
    color: "#4840BB",
  },
});

const navStyles = StyleSheet.create({
  button: {
    justifyContent: "center",
    borderRadius: 28,
    height: 56,
    width: "100%",
    marginBottom: 80,
  },

  buttonShadow: {
    shadowColor: "#133FDB",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 22,
  },

  buttonText: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: "Rubik_500Medium",
    textAlign: "center",
    color: "#FFF",
  },
});

export default Success;
