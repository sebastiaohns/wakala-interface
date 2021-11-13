import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import ScreenCmpt from "../../components/ScreenCmpt";
import NavHeader from "../../components/NavHeader";

const ButtonsOptions = (props) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(props.navigateTo)}>
        <LinearGradient
          colors={["#F7EFFA", "#FCF8ED"]}
          start={[1, 0]}
          end={[1, 1]}
          style={buttonStyles.button}
        >
          <View style={buttonStyles.icon}>
            <Feather
              name={props.icon}
              size={26}
              color="#4840BB"
              style={props.styleIcon}
            />
          </View>
          <Text style={buttonStyles.buttonTitle}>{props.title}</Text>
          <Text style={buttonStyles.buttonSubTitle}>{props.subTitle}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const SelectTopUpWithdraw = () => {
  return (
    <ScreenCmpt>
      <View style={styles.container}>
        <NavHeader />
        <View>
          <Text style={styles.subTitle}>Current balance</Text>
          <Text style={styles.title}>Ksh 10,000</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonsOptions
            title="Top Up"
            subTitle="Buy cUSD"
            icon="arrow-up-circle"
            navigateTo="Cash Mpesa"
            styleIcon={{
              transform: [{ rotate: "45deg" }],
            }}
          />
          <ButtonsOptions
            title="Withdraw"
            subTitle="Sell cUSD"
            icon="arrow-up-circle"
            navigateTo=""
            styleIcon={{
              transform: [{ rotate: "135deg" }],
            }}
          />
        </View>
      </View>
    </ScreenCmpt>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },

  title: {
    fontSize: 28,
    fontFamily: "Rubik_700Bold",
    color: "#4840BB",
    lineHeight: 34,
  },

  subTitle: {
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
});

const buttonStyles = StyleSheet.create({
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

  buttonSubTitle: {
    fontSize: 12,
    fontFamily: "Rubik_400Regular",
    color: "#333333",
    lineHeight: 14,
  },
});

export default SelectTopUpWithdraw;
