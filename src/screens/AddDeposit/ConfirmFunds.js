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
import SwipeButton from "../../components/SwipeButton";
import Modal from "../../components/Modal";
import { SIZES } from "../../consts/theme";

import { SHARED } from "../../assets/images";

import NavHeader from "../../components/NavHeader";
import ScreenCmpt from "../../components/ScreenCmpt";

const ModalContent = (props) => {
  return (
    <View style={modalStyles.container}>
      <Image source={SHARED} style={modalStyles.image} />
      <Text style={modalStyles.title}>Request Shared</Text>
      <Text style={modalStyles.text}>
        We shared your deposit request with the agent community. We will notify
        you once an agent has answered your request. It can take up to 4
        minutes. Click OK to exit this page.
      </Text>

      <TouchableOpacity onPress={() => props.handleAction()}>
        <Text style={modalStyles.button}>Okay</Text>
      </TouchableOpacity>
    </View>
  );
};

const ConfirmFunds = ({ navigation }) => {
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current?.openModal();
  };

  const closeModal = () => {
    modalRef.current?.closeModal();
    navigation.navigate("Send Mpesa");
  };

  return (
    <Fragment>
      <ScreenCmpt>
        <View style={styles.container}>
          <NavHeader />

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
                <View style={{ flexDirection: "row", alignItems: "baseline" }}>
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

          <SwipeButton handleAction={openModal} />
        </View>
      </ScreenCmpt>
      <Modal
        ref={modalRef}
        style={{ height: 550 }}
        content={<ModalContent handleAction={closeModal} />}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    marginHorizontal: 30,
    justifyContent: "space-between",
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

const modalStyles = StyleSheet.create({
  container: {
    height: "100%",
    paddingVertical: 20,
    alignItems: "center",
  },

  image: {
    height: 150,
    maxWidth: SIZES.width * 0.8,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
    color: "#333333",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 26,
  },

  text: {
    fontSize: 14,
    fontFamily: "Rubik_400Regular",
    color: "#333333",
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 58,
  },

  button: {
    fontSize: 20,
    fontFamily: "Rubik_500Medium",
    color: "#133FDB",
    lineHeight: 24,
    textAlign: "center",
  },
});

export default ConfirmFunds;
