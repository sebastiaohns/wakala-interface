import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SIZES } from "../consts/theme";

const Banner = React.forwardRef((props, ref) => {
  const bottom = useSharedValue(-350);
  const shadowOpacity = useSharedValue(0);
  const isShadowVisible = useSharedValue(false);

  const AnimatedStyles = {
    modal: useAnimatedStyle(() => {
      return {
        bottom: bottom.value,
      };
    }),
    shadow: useAnimatedStyle(() => {
      return {
        display: isShadowVisible.value ? "flex" : "none",
        opacity: shadowOpacity.value,
      };
    }),
  };

  const openBanner = () => {
    isShadowVisible.value = true;
    shadowOpacity.value = withSpring(0.5, {
      duration: 1000,
    });
    bottom.value = withSpring(SIZES.height / 2 - props.style.height / 2, {
      duration: 2000,
    });
  };

  const closeBanner = () => {
    bottom.value = withTiming(-props.style.height, {
      duration: 500,
    });
    shadowOpacity.value = withTiming(0, {
      duration: 1000,
    });
    isShadowVisible.value = withTiming(false, {
      duration: 1500,
    });
  };

  React.useImperativeHandle(ref, () => ({ openBanner, closeBanner }));

  return (
    <>
      <Animated.View style={[styles.shadow, AnimatedStyles.shadow]} />
      <Animated.View
        style={[{ ...props.style }, styles.modal, AnimatedStyles.modal]}
      >
        {props.content}
      </Animated.View>
    </>
  );
});

const styles = StyleSheet.create({
  shadow: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#000",
    zIndex: 2,
  },
  modal: {
    width: "auto",
    borderRadius: 16,
    position: "absolute",
    marginHorizontal: 20,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    zIndex: 3,
  },
});

export default Banner;
