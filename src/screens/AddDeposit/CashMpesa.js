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

import { CASH, MPESA } from "../../assets/images";
import { SIZES } from "../../consts/theme";

const CashMpesa = ({ navigation }) => {
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
              <Text style={styles.title}>
                How do you want to top up your wallet?
              </Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Add Funds")}
                style={styles.buttonContainer}
              >
                <View style={styles.icon}>
                  <Image source={MPESA} style={styles.image} />
                </View>
                <View>
                  <Text style={styles.buttonTitle}>Mpesa</Text>
                  <Text style={styles.subtitle}>Deposit funds using mpesa</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <View style={styles.icon}>
                  <Image source={CASH} style={styles.image} />
                </View>
                <View>
                  <Text style={styles.buttonTitle}>Cash</Text>
                  <Text style={styles.subtitle}>
                    Deposit funds through a cash agent
                  </Text>
                </View>
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
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
    color: "#333333",
    lineHeight: 19,
    textAlign: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 40,
    paddingRight: 50,
  },

  icon: {
    width: 59,
    height: 63,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  image: {
    height: 30,
    maxWidth: SIZES.width * 0.8,
    resizeMode: "contain",
  },

  button: {
    width: 136,
    height: 200,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: "center",
  },

  buttonTitle: {
    fontSize: 18,
    fontFamily: "Rubik_500Medium",
    color: "#4840BB",
    lineHeight: 22,
  },

  subtitle: {
    fontSize: 16,
    fontFamily: "Inter_500Medium",
    color: "#A2A3A2",
    lineHeight: 28,
  },
});

export default CashMpesa;
