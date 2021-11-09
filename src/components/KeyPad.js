import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import { Feather } from "@expo/vector-icons";
import { SIZES, COLORS } from "../consts/theme";
import { TextInputMask } from "react-native-masked-text";

const KeyPad = ({ navigation }) => {
  const [value, setValue] = useState("");

  const handleChange = (text) => {
    if (value == "" && text == "0") {
      return null;
    }
    setValue(value + text);
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };

  const getValue = () => {
    return value;
  };

  const setNewValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <View style={styles.container}>
      <TextInputMask
        type={"money"}
        options={{
          unit: "Ksh ",
        }}
        value={value}
        style={styles.title}
        placeholder="Ksh 0,00"
        placeholderTextColor={COLORS.primary}
      />
      <View style={styles.row}>
        <TouchableHighlight
          onPress={() => handleChange("7")}
          underlayColor="rgba(247, 239, 250, 0.6)"
          delayPressOut={100}
          style={styles.key}
        >
          <Text style={styles.number}>7</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => handleChange("8")}
          underlayColor="rgba(247, 239, 250, 0.6)"
          delayPressOut={100}
          style={styles.key}
        >
          <Text style={styles.number}>8</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => handleChange("9")}
          underlayColor="rgba(247, 239, 250, 0.6)"
          delayPressOut={100}
          style={styles.key}
        >
          <Text style={styles.number}>9</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.row}>
        <TouchableHighlight
          onPress={() => handleChange("4")}
          underlayColor="rgba(247, 239, 250, 0.6)"
          delayPressOut={100}
          style={styles.key}
        >
          <Text style={styles.number}>4</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => handleChange("5")}
          underlayColor="rgba(247, 239, 250, 0.6)"
          delayPressOut={100}
          style={styles.key}
        >
          <Text style={styles.number}>5</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => handleChange("6")}
          underlayColor="rgba(247, 239, 250, 0.6)"
          delayPressOut={100}
          style={styles.key}
        >
          <Text style={styles.number}>6</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.row}>
        <TouchableHighlight
          onPress={() => handleChange("1")}
          underlayColor="rgba(247, 239, 250, 0.6)"
          delayPressOut={100}
          style={styles.key}
        >
          <Text style={styles.number}>1</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => handleChange("2")}
          underlayColor="rgba(247, 239, 250, 0.6)"
          delayPressOut={100}
          style={styles.key}
        >
          <Text style={styles.number}>2</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => handleChange("3")}
          underlayColor="rgba(247, 239, 250, 0.6)"
          delayPressOut={100}
          style={styles.key}
        >
          <Text style={styles.number}>3</Text>
        </TouchableHighlight>
      </View>

      <View style={[styles.row]}>
        <TouchableHighlight
          underlayColor="rgba(247, 239, 250, 0.6)"
          delayPressOut={100}
          style={styles.key}
        >
          {/* Dummy key to make keypad first line position consistent */}
          <Text></Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => handleChange("0")}
          underlayColor="rgba(247, 239, 250, 0.6)"
          delayPressOut={100}
          style={styles.key}
        >
          <Text style={styles.number}>0</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => handleDelete()}
          underlayColor="rgba(247, 239, 250, 0.6)"
          delayPressOut={100}
          style={styles.key}
        >
          <Feather
            name="delete"
            size={24}
            color="#1C1939"
            style={styles.number}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

let keyWidth = SIZES.width * 0.25;
let keyHeight = keyWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    fontFamily: "Rubik_700Bold",
    lineHeight: 34,
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: 30,
  },

  row: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  key: {
    width: keyWidth,
    height: keyHeight,
    borderRadius: keyWidth / 2,
    justifyContent: "center",
    marginVertical: 10,
  },

  number: {
    color: "#1C1939",
    fontSize: 24,
    lineHeight: 26,
    textAlign: "center",
    fontFamily: "DMSans_700Bold",
  },

  button: {
    height: 56,
    width: 100,
    borderRadius: 28,
    marginHorizontal: 30,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0000FF",
  },
});

export default KeyPad;
