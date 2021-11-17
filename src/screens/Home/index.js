import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  FlatList,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import ScreenCmpt from "../../components/ScreenCmpt";
import RequestCard from "../../components/RequestCard";

import { COLORS, SIZES, FONTS } from "../../consts/theme";
import rawData from "../../utils/DepositRequestData";
import { HOME_EMPTY } from "../../assets/images";

const NavMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={navStyles.nav}>
      <TouchableOpacity style={navStyles.buttonShadow}>
        <LinearGradient
          colors={[
            "#133FDB",
            "rgba(20, 63, 218, 0.994943)",
            "rgba(183, 0, 77, 0.3)",
          ]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1.2, y: 1.4 }}
          locations={[0.09, 0.5754, 1]}
          style={navStyles.button}
        >
          <Text style={navStyles.buttonText}>Send</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={navStyles.buttonShadow}
        onPress={() => navigation.navigate("Select Operation")}
      >
        <LinearGradient
          colors={["#133FDB", "rgba(183, 0, 77, 0.3)"]}
          start={{ x: -0.5, y: -0.5 }}
          end={{ x: 1, y: 1.5 }}
          style={navStyles.button}
        >
          <Text style={navStyles.buttonText}>Add/Withdraw</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={navStyles.qrButton}>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={24}
            color={COLORS.primary}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [depositRequestData, setDepositRequestData] = useState([]);

  function getDepositRequestData() {
    setDepositRequestData(rawData);

    if (rawData.length >= 1) {
      setIsEmpty(false);
    }
  }

  function removeDepositRequestItem(id) {
    var newData = depositRequestData.filter((item) => item._id != id);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setDepositRequestData(newData);

    if (newData.length < 1) {
      setIsEmpty(true);
    }
  }

  useEffect(() => {
    getDepositRequestData();
  }, []);

  return (
    <ScreenCmpt home={true}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="list-outline" size={38} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      {isEmpty ? (
        <View style={styles.wrapper}>
          <Image source={HOME_EMPTY} style={styles.image} />
          <Text style={styles.text}>
            All requests have been fullfilled. Take a break, get some air, check
            back in later
          </Text>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FlatList
            data={depositRequestData}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <RequestCard
                _id={item._id}
                amount={item.amount}
                stars={item.stars}
                rating={item.rating}
                type={item.type}
                deleteItem={removeDepositRequestItem}
              />
            )}
          />
        </View>
      )}
      <NavMenu />
    </ScreenCmpt>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  menu: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
  },

  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
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

    shadowColor: "#000",
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 4,
  },

  button: {
    justifyContent: "center",
    borderRadius: (SIZES.width * 0.12) / 2,
    height: SIZES.width * 0.12,
    minWidth: SIZES.width * 0.35,
  },

  buttonShadow: {
    shadowColor: "#133FDB",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 4,

    elevation: 4,
  },

  buttonText: {
    fontSize: 13,
    lineHeight: 15,
    fontFamily: "Rubik_500Medium",
    textAlign: "center",
    color: "#FFF",
  },
});

export default HomeScreen;
