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
import { Ionicons, Feather } from "@expo/vector-icons";

const Success = ({ navigation }) => {
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
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.nav}
            >
              <Feather name="chevron-left" size={32} color="#4840BB" />
            </TouchableOpacity>

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
