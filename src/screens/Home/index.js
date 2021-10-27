import React, { Fragment } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS, SIZES, FONTS } from "../../consts/theme";
import { HOME_EMPTY } from "../../assets/images";

const HomeScreen = ({ navigation }) => {
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#E5E5E5" }} />

      <SafeAreaView style={styles.container}>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="list-outline" size={38} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.wrapper}>
          <Image source={HOME_EMPTY} style={styles.image} />
          <Text style={styles.text}>
            All requests have been fullfilled. Take a break, get some air, check
            back in later
          </Text>
        </View>

        <View style={navStyles.nav}>
          <TouchableOpacity style={navStyles.buttonShadow}>
            <LinearGradient
              colors={["rgba(183, 0, 76, 0.3)", "rgba(19, 63, 219, 1)"]}
              start={[1, 0]}
              end={[0, 1]}
              style={navStyles.button}
            >
              <Text style={navStyles.buttonText}>Send</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={navStyles.buttonShadow}>
            <LinearGradient
              colors={["rgba(183, 0, 76, 0.3)", "rgba(19, 63, 219, 1)"]}
              start={[1, 0]}
              end={[0, 1]}
              style={navStyles.button}
            >
              <Text style={navStyles.buttonText}>Add/Withdraw</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={navStyles.qrButton}>
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={SIZES.width * 0.07}
                color={COLORS.primary}
              />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  menu: {
    width: "100%",
    padding: 30,
    justifyContent: "flex-start",
    backgroundColor: "#E5E5E5",
  },

  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "#E5E5E5",
  },

  image: {
    height: 180,
    maxWidth: SIZES.width * 0.8,
    resizeMode: "contain",
  },

  text: {
    fontSize: FONTS.body4.fontSize,
    fontFamily: FONTS.body4.fontFamily,
    lineHeight: FONTS.body4.lineHeight,
    textAlign: "center",
  },
});

const navStyles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
    width: "100%",
    paddingHorizontal: 10,
    backgroundColor: "#F5F5F5",

    shadowColor: "#000000",
    shadowOffset: { width: -4, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },

  button: {
    justifyContent: "center",
    borderRadius: 28,
    height: 56,
    width: SIZES.width * 0.36,
  },

  buttonShadow: {
    shadowColor: "#133FDB",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 22,
  },

  buttonText: {
    fontSize: FONTS.body5.fontSize,
    lineHeight: FONTS.body5.lineHeight,
    fontFamily: FONTS.body3.fontFamily,
    textAlign: "center",
    color: "#FFF",
  },
});

export default HomeScreen;
