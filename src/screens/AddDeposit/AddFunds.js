import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import KeyPad from "../../components/KeyPad";
import NavHeader from "../../components/NavHeader";
import ScreenCmpt from "../../components/ScreenCmpt";

const AddFunds = ({ navigation }) => {
  return (
    <ScreenCmpt>
      <View style={styles.container}>
        <NavHeader />
        <KeyPad />

        <TouchableOpacity
          style={styles.buttonShadow}
          onPress={() => navigation.navigate("Confirm Funds")}
        >
          <LinearGradient
            colors={["rgba(183, 0, 76, 0.3)", "rgba(19, 63, 219, 1)"]}
            start={[1, 0]}
            end={[0, 1]}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Review</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScreenCmpt>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    marginHorizontal: 30,
    justifyContent: "space-around",
  },

  button: {
    justifyContent: "center",
    borderRadius: 28,
    height: 56,
    width: "100%",
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

export default AddFunds;
