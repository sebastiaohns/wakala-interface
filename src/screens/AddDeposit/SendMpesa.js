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
import { Ionicons } from "@expo/vector-icons";
import SwipeButton from "../../components/SwipeButton";
import Modal from "../../components/Modal";
import { SIZES } from "../../consts/theme";

import { BORED } from "../../assets/images";

const SendMpesa = ({ navigation }) => {
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current?.openModal();
  };

  const closeModal = () => {
    modalRef.current?.closeModal();
    navigation.navigate("Success");
  };

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
              marginHorizontal: 30,
              flex: 1,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.nav}
            >
              <Feather name="chevron-left" size={32} color="#4840BB" />
            </TouchableOpacity>

            <View>
              <View style={styles.titleContainer}>
                <View style={styles.iconContainer}>
                  <Ionicons
                    name="md-paper-plane-sharp"
                    size={20}
                    color="white"
                  />
                </View>
                <Text style={styles.title}>Send M-PESA now </Text>
              </View>
              <View>
                <Text style={styles.text}>
                  Your cUSD is ready and has been deposited to the Wakala escrow
                  account!
                </Text>
                <Text style={styles.text}>
                  To receive your cUSD, send M-PESA to details below.
                </Text>
              </View>
            </View>

            <View style={styles.card}>
              <View>
                <Text style={styles.cardSubTitle}>Send</Text>
                <Text style={[styles.cardTitle, { marginBottom: 18 }]}>
                  Ksh 1,000
                </Text>
              </View>
              <View>
                <Text style={styles.cardSubTitle}>To</Text>
                <Text style={styles.cardTitle}>+254 705 124 767</Text>
                <View style={styles.copyContainer}>
                  <Text style={styles.copyText}>Copy</Text>
                </View>
              </View>
            </View>

            <SwipeButton handleAction={openModal} />
            <TouchableOpacity
              style={{ marginTop: 30 }}
              onPress={() => navigation.goBack()}
            >
              <Text style={[navStyles.buttonText, { color: "#133FDB" }]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
      <Modal
        ref={modalRef}
        style={{ height: 500 }}
        content={
          <View style={modal.container}>
            <Image source={BORED} style={modal.image} />
            <Text style={modal.title}>Thank you!</Text>
            <Text style={modal.text}>
              After your agents confirms of M-PESA payment receipt. Your cUSD
              will be deposited to your wallet.
            </Text>

            <TouchableOpacity onPress={closeModal}>
              <Text style={modal.button}>Got it!</Text>
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

  titleContainer: {
    flexDirection: "row",
  },

  iconContainer: {
    width: 40,
    height: 32,
    backgroundColor: "#4840BB",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    marginRight: 15,
  },

  title: {
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
    lineHeight: 24,
    color: "#333333",
  },

  text: {
    fontSize: 14,
    fontFamily: "Rubik_400Regular",
    lineHeight: 21,
    color: "#333333",
    marginBottom: 30,
  },

  card: {
    height: 300,
    width: "100%",
    borderRadius: 16,
    backgroundColor: "#FFF",
    padding: 12,
    justifyContent: "space-around",
    paddingVertical: 40,
    marginBottom: 50,
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

  copyContainer: {
    width: 68,
    height: 29,
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    justifyContent: "center",
    marginTop: 10,
  },

  copyText: {
    fontSize: 12,
    fontFamily: "Rubik_500Medium",
    lineHeight: 18,
    color: "#333333",
    textAlign: "center",
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

const modal = StyleSheet.create({
  container: {
    height: "100%",
    paddingVertical: 20,
    alignItems: "center",
  },

  image: {
    height: 70,
    maxWidth: SIZES.width * 0.8,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 50,
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

export default SendMpesa;
