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
import Banner from "../../components/Banner";

import { MODEL } from "../../assets/images";

const CashMpesa = ({ navigation }) => {
  const bannerRef = React.useRef();
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
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => bannerRef.current?.openBanner()}
              >
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
      <Banner
        ref={bannerRef}
        style={{ height: 350 }}
        content={
          <View style={banner.container}>
            <Image source={MODEL} style={banner.image} />
            <Text style={banner.title}>Coming soon</Text>
            <Text style={banner.text}>
              Stay put, we are soon adding cash option.
            </Text>

            <TouchableOpacity
              style={{
                width: 100,
                alignSelf: "center",
              }}
              onPress={() => bannerRef.current?.closeBanner()}
            >
              <Text style={banner.button}>Dismiss</Text>
            </TouchableOpacity>
          </View>
        }
      />
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

const banner = StyleSheet.create({
  container: {
    height: "100%",
    paddingVertical: 20,
    justifyContent: "space-between",
  },

  image: {
    height: 150,
    maxWidth: SIZES.width * 0.8,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    fontFamily: "Rubik_500Medium",
    color: "#2C2948",
    lineHeight: 22,
    textAlign: "center",
  },

  text: {
    fontSize: 14,
    fontFamily: "Rubik_400Regular",
    color: "#1C1939CC",
    lineHeight: 21,
    textAlign: "center",
  },

  button: {
    fontSize: 14,
    fontFamily: "Rubik_700Bold",
    color: "#4840BB",
    lineHeight: 23,
    textAlign: "center",
    marginTop: 30,
    alignSelf: "center",
    alignItems: "center",
    textAlignVertical: "center",
  },
});

export default CashMpesa;
