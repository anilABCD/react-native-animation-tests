import React, { useState } from "react";
import { Animated, StyleSheet, SafeAreaView, ScrollView, TouchableWithoutFeedback, View } from "react-native";
export default function Translate() {
  const [headerShown, setHeaderShown] = useState(false);

  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));
  const [opacity, setOpacity] = useState(1);

  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: -150, // for up or left for y and x .
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      // Animated.timing(animatedValue, {
      //   toValue: 0,
      //   duration: 1000,
      //   useNativeDriver: false,
      // }).start();

      animatedValue.setValue(0); // for directly setting value without animation
    });
  };

  const animatedStyle = {
    transform: [
      {
        translateY: animatedValue,
      },
      {
        translateX: animatedValue,
      },
    ],
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={startAnimation}>
          <Animated.View style={[{ height: 100, width: 100, backgroundColor: "red" }, animatedStyle]}></Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
