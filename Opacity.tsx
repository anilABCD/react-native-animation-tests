import React, { useState } from "react";
import { Animated, StyleSheet, SafeAreaView, ScrollView, TouchableWithoutFeedback, View } from "react-native";
export default function Opacity() {
  const [headerShown, setHeaderShown] = useState(false);

  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(1));
  const [opacity, setOpacity] = useState(1);

  const startAnimation = () => {
    if (opacity === 1) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 350,
        useNativeDriver: false,
      }).start();

      setOpacity(0);
    }
    if (opacity === 0) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 350,
        useNativeDriver: false,
      }).start();

      setOpacity(1);
    }
  };

  const animatedStyle = {
    opacity: animatedValue,
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
