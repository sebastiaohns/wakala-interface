import React, { Fragment } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MODEL, CASH, MPESA } from "../../assets/images";
import { SIZES } from "../../consts/theme";

import Banner from "../../components/Banner";
import NavHeader from "../../components/NavHeader";
import ScreenCmpt from "../../components/ScreenCmpt";

const ButtonsOptions = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.handleAction}
        style={buttonStyles.container}
      >
        <View style={buttonStyles.icon}>
          <Image source={props.image} style={buttonStyles.image} />
        </View>
        <View>
          <Text style={buttonStyles.title}>{props.title}</Text>
          <Text style={buttonStyles.subTitle}>{props.subTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const BannerContent = (props) => {
  return (
    <View style={bannerStyles.container}>
      <Image source={MODEL} style={bannerStyles.image} />
      <Text style={bannerStyles.title}>Coming soon</Text>
      <Text style={bannerStyles.text}>
        Stay put, we are soon adding cash option.
      </Text>

      <TouchableOpacity
        style={{
          width: 100,
          alignSelf: "center",
        }}
        onPress={() => props.bannerRef.current?.closeBanner()}
      >
        <Text style={bannerStyles.button}>Dismiss</Text>
      </TouchableOpacity>
    </View>
  );
};

const CashMpesa = () => {
  const navigation = useNavigation();
  const bannerRef = React.useRef();

  return (
    <Fragment>
      <ScreenCmpt>
        <View style={{ marginHorizontal: 30 }}>
          <NavHeader />

          <Text style={styles.title}>
            How do you want to top up your wallet?
          </Text>

          <ButtonsOptions
            title="Mpesa"
            subTitle="Deposit funds using mpesa"
            image={MPESA}
            handleAction={() => navigation.navigate("Add Funds")}
          />
          <ButtonsOptions
            title="Cash"
            subTitle="Deposit funds through a cash agent"
            image={CASH}
            handleAction={() => bannerRef.current?.openBanner()}
          />
        </View>
      </ScreenCmpt>

      <Banner
        ref={bannerRef}
        style={{ height: 350 }}
        content={<BannerContent bannerRef={bannerRef} />}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
    color: "#333333",
    lineHeight: 19,
    textAlign: "center",
  },
});

const buttonStyles = StyleSheet.create({
  container: {
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

  title: {
    fontSize: 18,
    fontFamily: "Rubik_500Medium",
    color: "#4840BB",
    lineHeight: 22,
  },

  subTitle: {
    fontSize: 16,
    fontFamily: "Inter_500Medium",
    color: "#A2A3A2",
    lineHeight: 28,
  },
});

const bannerStyles = StyleSheet.create({
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
