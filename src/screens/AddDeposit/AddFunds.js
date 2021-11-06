import React, { Fragment, useState, useRef } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { RFPercentage } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import { FONTS, SIZES, COLORS } from "../../consts/theme";

const AddFunds = ({ navigation }) => {
  const refInput2 = useRef();
  const refInput3 = useRef();
  const refInput4 = useRef();
  const refInput5 = useRef();
  const refInput6 = useRef();

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");

  const [value, setValue] = useState("");

  const [warn, showWarn] = useState(false);

  const handleChange = (text) => {
    if (value.length < 6) {
      setValue(value + text);
    }

    if (value.length == 5) {
      showWarn(true);
    }
  };

  const handleClear = () => {
    showWarn(false);
    let temp = value;
    let newValue = temp.slice(0, -1);
    setValue(newValue);
  };

  const handleLastValue = (text) => {
    setValue6(text);

    if (value1 && value2 && value3 && value4 && value5 && text) {
      showWarn(true);
      console.log("dshf");
    } else {
      showWarn(false);
    }
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
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.nav}
            >
              <Feather name="chevron-left" size={32} color="#4840BB" />
            </TouchableOpacity>

            <View>
              <View>
                <Text style={styles.title}>Ksh 1,000</Text>
              </View>
              {/* First row */}
              <View style={styles.rowst}>
                <TouchableOpacity style={{ position: "absolute", left: 0 }}>
                  <Text onPress={() => handleChange("1")} style={styles.keypad}>
                    1
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text onPress={() => handleChange("2")} style={styles.keypad}>
                    2
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ position: "absolute", right: 0 }}>
                  <Text onPress={() => handleChange("3")} style={styles.keypad}>
                    3
                  </Text>
                </TouchableOpacity>
              </View>

              {/* second row */}
              <View style={styles.rowst}>
                <TouchableOpacity style={{ position: "absolute", left: 0 }}>
                  <Text onPress={() => handleChange("4")} style={styles.keypad}>
                    4
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text onPress={() => handleChange("5")} style={styles.keypad}>
                    5
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ position: "absolute", right: 0 }}>
                  <Text onPress={() => handleChange("6")} style={styles.keypad}>
                    6
                  </Text>
                </TouchableOpacity>
              </View>

              {/* third row */}
              <View style={styles.rowst}>
                <TouchableOpacity style={{ position: "absolute", left: 0 }}>
                  <Text onPress={() => handleChange("7")} style={styles.keypad}>
                    7
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text onPress={() => handleChange("8")} style={styles.keypad}>
                    8
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ position: "absolute", right: 0 }}>
                  <Text onPress={() => handleChange("9")} style={styles.keypad}>
                    9
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Fourth  row*/}
              <View style={styles.rowst}>
                <TouchableOpacity style={{ position: "absolute", left: 0 }}>
                  <Text onPress={() => handleChange("0")} style={styles.keypad}>
                    1
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text onPress={() => handleChange("0")} style={styles.keypad}>
                    0
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleClear()}
                  style={{ position: "absolute", right: 0 }}
                >
                  <Image source={require("../../assets/images/cross.png")} />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={navStyles.buttonShadow}
              onPress={() => navigation.navigate("Confirm Funds")}
            >
              <LinearGradient
                colors={["rgba(183, 0, 76, 0.3)", "rgba(19, 63, 219, 1)"]}
                start={[1, 0]}
                end={[0, 1]}
                style={navStyles.button}
              >
                <Text style={navStyles.buttonText}>Review</Text>
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
    fontSize: 28,
    fontFamily: "Rubik_700Bold",
    lineHeight: 34,
    color: "#4840BB",
    textAlign: "center",
  },

  input: {
    marginTop: RFPercentage(2),
    marginRight: RFPercentage(1.3),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: RFPercentage(6),
    height: RFPercentage(6.9),
    marginVertical: RFPercentage(0.7),
    borderRadius: RFPercentage(1),
  },

  keypad: {
    fontFamily: "Inter_500Medium",
    color: COLORS.keypad,
    fontSize: RFPercentage(3.4),
  },

  rowst: {
    marginTop: RFPercentage(6),
    width: "80%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
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

export default AddFunds;
