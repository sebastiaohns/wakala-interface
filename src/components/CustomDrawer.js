import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { connect, useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

import { FONTS, SIZES } from "../consts/theme";
import CountryInfo from "../utils/CountryInfo";
import ContractMethods from "../utils/celo-integration/ContractMethods";

const DrawerElement = (props) => {
  return (
    <TouchableOpacity
      style={stylesDrawerElement.container}
      onPress={props.handleAction}
    >
      <Text style={stylesDrawerElement.text}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const magic = props.magic;

  const [KSH, setKSH] = useState("0");
  const [flag, setFlag] = useState("");
  const [user, setUser] = useState("");
  const [cUSD, setCUSD] = useState("0");
  const [loading, setloading] = useState(true);
  const [phone, setPhone] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");

  function pickFlag() {
    if (!phone) {
      return;
    }

    let len = 4;
    while (len > 0) {
      let country_code = phone.substring(0, len);
      CountryInfo.forEach((element) => {
        if (element.dial_code === country_code) {
          setFlag(element.flag);
        }
      });
      len--;
    }
  }

  // Logout of Magic session
  function logout() {
    magic.user.logout().then(() => {
      setUser("");
      dispatch({ type: "LOGOUT", payload: {} });
    });
  }

  useEffect(async () => {
    try {
      setloading(true);
      setLoadingMessage("Getting user's Metadata...");
      let userMetadata = await magic.user.getMetadata();
      setPhone(userMetadata.phoneNumber);
      let { publicAddress } = userMetadata;
      dispatch({
        type: "UPDATE_USER_METADATA",
        value: { userMetadata: userMetadata },
      });
      let contractMethods = new ContractMethods(magic);
      setLoadingMessage("Initializing the Blockchain connection...");
      await contractMethods.init();
      dispatch({
        type: "INIT_CONTRACT_METHODS",
        value: contractMethods,
      });

      setLoadingMessage("Getting user's Balance...");
      let totalBalance = await contractMethods.kit.getTotalBalance(
        publicAddress
      );
      let money = totalBalance.cUSD;
      //let balance = await contractMethods.web3.eth.getBalance(publicAddress)
      let amount = contractMethods.web3.utils.fromWei(
        money.toString(),
        "ether"
      );
      setCUSD(amount);
      setKSH(amount);
      setloading(false);
    } catch (error) {
      alert(error);
      setloading(false);
    }
    pickFlag();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
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
          style={styles.header}
        >
          <View style={{ marginBottom: 60 }}>
            <View style={styles.img} />
            <View style={styles.phoneStyle}>
              <Text style={styles.smallText}>{flag} </Text>
              <Text style={styles.smallText}>{phone}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <View style={stylesBalance.balance}>
        {!loading ? (
          <>
            <View>
              <Text style={stylesBalance.text}>Current Balance</Text>
              <Text style={stylesBalance.ksh}>Ksh {KSH}</Text>
            </View>
            <Text style={stylesBalance.cusd}>{cUSD} cUSD</Text>
          </>
        ) : (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={FONTS.body4}>{loadingMessage}</Text>
          </View>
        )}
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerElement
          label={"Home"}
          handleAction={() => navigation.navigate("Home Screen")}
        />
        <DrawerElement label={"Pending Requests"} />
        <DrawerElement label={"Open Requests"} />
        <DrawerElement label={"Transaction History"} />
        <DrawerElement
          label={"Governance"}
          handleAction={() => navigation.navigate("Governance")}
        />
        <DrawerElement label={"Ramp"} />
        <DrawerElement
          label={"Settings"}
          handleAction={() => navigation.navigate("Settings")}
        />
        <DrawerElement
          label={"Help"}
          handleAction={() => navigation.navigate("HelpScreen")}
        />
        <DrawerElement label={"Sign out"} handleAction={() => logout()} />
        <View
          style={{
            borderTopColor: "#444444",
            borderTopWidth: 0.2,
            padding: 20,
          }}
        >
          <Text style={styles.smallText}>Version 2.0.1</Text>
        </View>
      </DrawerContentScrollView>

      <magic.Relayer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.8,
    height: SIZES.height,
    backgroundColor: "#F5F5F5",
  },

  header: {
    height: "auto",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
    paddingTop: 40,
  },

  img: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
  },

  phoneStyle: {
    flexDirection: "row",
    paddingVertical: 15,
    alignItems: "center",
  },

  smallText: {
    fontFamily: "Rubik_400Regular",
    color: "#333333",
    fontSize: 10,
  },
});

const stylesBalance = StyleSheet.create({
  balance: {
    width: SIZES.width * 0.75,
    height: 100,
    marginLeft: (SIZES.width * 0.05) / 2,
    marginTop: -50,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    padding: 10,
    justifyContent: "space-between",

    shadowColor: "#7a5dba",
    shadowOffset: { width: 0, height: 2.5 },
    shadowOpacity: 0.25,
    shadowRadius: 25,
  },

  text: {
    fontSize: 12,
    color: "#333333",
    fontFamily: "Rubik_400Regular",
  },

  ksh: {
    fontSize: 24,
    color: "#333333",
    fontFamily: "Rubik_500Medium",
  },

  cusd: {
    fontSize: 16,
    color: "#333333",
    fontFamily: "Rubik_500Medium",
  },
});

const stylesDrawerElement = StyleSheet.create({
  container: {
    height: 54,
    justifyContent: "center",
    borderTopColor: "#444444",
    borderTopWidth: 0.2,
  },

  text: {
    fontSize: 16,
    lineHeight: 30,
    color: "#4840BB",
    fontFamily: "Rubik_400Regular",
    paddingLeft: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    magic: state.magic,
    userMetadata: state.userMetadata,
    contractMethods: state.contractMethods,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: async (action) => {
      await dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
