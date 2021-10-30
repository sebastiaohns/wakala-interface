import React from "react";
import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../consts/theme";
//config
import theme from "/src/consts/theme";

function Screen({ children, statusBarColor = COLORS.white, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {Platform.OS === "android" ? <StatusBar backgroundColor={statusBarColor} barStyle="dark-content" /> : null}
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});


export default Screen;