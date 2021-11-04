import React, { Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

const ConfirmFunds = ({ navigation }) => {
  return (
    <Fragment>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: "rgba(247, 239, 250, 1.0)" }}
      />

      <SafeAreaView style={{ flex: 1, backgroundColor: "#FCF8ED" }}>
        <LinearGradient
          colors={["rgba(247, 239, 250, 1.0)", "rgba(252, 248, 237, 1.0)"]}
          start={[1, 0]}
          end={[1, 1]}
          style={styles.container}
        >
          <View
            style={{
              flex: 1,
              marginHorizontal: 30,
              justifyContent: "space-between",
            }}
          >
            <View>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.nav}
              >
                <Feather name="chevron-left" size={32} color="#4840BB" />
              </TouchableOpacity>

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
                style={styles.cardContainer}
              >
                <View style={styles.requestInfoContainer}>
                  <Text style={styles.requestTitle}>Request to deposit</Text>
                  <Text style={styles.requestAmount}>Ksh 1,000</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={styles.descriptionContainer}>
                    <View
                      style={{ flexDirection: "row", alignItems: "baseline" }}
                    >
                      <Text style={styles.feesText}>Estimated Fees </Text>
                      <Feather name="info" size={11} color="#222222" />
                    </View>
                    <Text style={styles.receivesText}>Total you receive</Text>
                  </View>
                  <View style={styles.AmountContainer}>
                    <Text style={styles.feesText}>Ksh 10</Text>
                    <Text style={styles.receivesText}>Ksh 990</Text>
                  </View>
                </View>
              </LinearGradient>
            </View>

            <TouchableOpacity
              style={navStyles.buttonShadow}
              onPress={() => navigation.navigate("Send Mpesa")}
            >
              <LinearGradient
                colors={["rgba(183, 0, 76, 0.3)", "rgba(19, 63, 219, 1)"]}
                start={[1, 0]}
                end={[0, 1]}
                style={navStyles.button}
              >
                <Text style={navStyles.buttonText}>Swipe to confirm</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </Fragment>
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

  cardContainer: {
    height: 230,
    width: "100%",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#FFF",
    backgroundColor: "#FFF",
    paddingHorizontal: 8,
    paddingVertical: 20,
  },

  requestInfoContainer: {
    marginBottom: 37,
  },
  requestTitle: {
    fontSize: 12,
    fontFamily: "Rubik_400Regular",
    lineHeight: 14,
    color: "#333333",
  },
  requestAmount: {
    fontSize: 28,
    fontFamily: "Rubik_700Bold",
    lineHeight: 34,
    color: "#4840BB",
  },

  descriptionContainer: {
    flex: 6,
  },

  feesText: {
    fontSize: 11,
    fontFamily: "Rubik_400Regular",
    lineHeight: 13,
    color: "#222222",
    marginBottom: 37,
  },

  AmountContainer: {
    flex: 4,
  },

  receivesText: {
    fontSize: 14,
    fontFamily: "Rubik_500Medium",
    lineHeight: 17,
    color: "#222222",
  },
});

const navStyles = StyleSheet.create({
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

export default ConfirmFunds;
