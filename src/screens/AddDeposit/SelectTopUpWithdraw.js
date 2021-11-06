import React, { Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

const SelectTopUpWithdraw = ({ navigation }) => {
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
          <View style={{ marginHorizontal: 30 }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.nav}
            >
              <Feather name="chevron-left" size={32} color="#4840BB" />
            </TouchableOpacity>

            <View>
              <Text style={styles.subtitle}>Current balance</Text>
              <Text style={styles.title}>Ksh 10,000</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Cash Mpesa")}
              >
                <LinearGradient
                  colors={[
                    "rgba(247, 239, 250, 1.0)",
                    "rgba(252, 248, 237, 1.0)",
                  ]}
                  start={[1, 0]}
                  end={[1, 1]}
                  style={styles.button}
                >
                  <View style={styles.icon}>
                    <Feather
                      name="arrow-up-circle"
                      size={26}
                      color="#4840BB"
                      style={{
                        transform: [{ rotate: "135deg" }],
                      }}
                    />
                  </View>
                  <Text style={styles.buttonTitle}>Top Up</Text>
                  <Text style={styles.subtitle}>Buy cUSD</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity>
                <LinearGradient
                  colors={[
                    "rgba(247, 239, 250, 1.0)",
                    "rgba(252, 248, 237, 1.0)",
                  ]}
                  start={[1, 0]}
                  end={[1, 1]}
                  style={styles.button}
                >
                  <View style={styles.icon}>
                    <Feather
                      name="arrow-up-circle"
                      size={26}
                      color="#4840BB"
                      style={{
                        transform: [{ rotate: "45deg" }],
                      }}
                    />
                  </View>
                  <Text style={styles.buttonTitle}>Withdraw</Text>
                  <Text style={styles.subtitle}>Sell cUSD</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
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

  title: {
    fontSize: 28,
    fontFamily: "Rubik_700Bold",
    color: "#4840BB",
    lineHeight: 34,
  },

  subtitle: {
    fontSize: 12,
    fontFamily: "Rubik_400Regular",
    color: "#333333",
    lineHeight: 14,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 50,
  },

  button: {
    width: 136,
    height: 200,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: "center",
  },

  icon: {
    width: 59,
    height: 63,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
  },

  buttonTitle: {
    fontSize: 18,
    fontFamily: "Inter_500Medium",
    color: "#4840BB",
    lineHeight: 22,
    marginBottom: 12,
  },
});

export default SelectTopUpWithdraw;
