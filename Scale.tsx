import React, { useState } from "react";
import { Animated, StyleSheet, SafeAreaView, Text, ScrollView, TouchableWithoutFeedback, View } from "react-native";
export default function Scale() {
  const [headerShown, setHeaderShown] = useState(false);

  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(1));
  const [start, setStart] = useState(true);

  const startAnimation = () => {
    if (start === true) {
      setStart(false);

      Animated.timing(animatedValue, {
        toValue: 2,
        // for flipping use eg -1 for 1x size wit flip
        // to scale increase the number to 1xtimes 1 mening 1x of scale .
        // 1x meaing same size or its original size.
        // to scale double times use 2 to 2x times of scale .
        duration: 1000,
        useNativeDriver: false,
      }).start(() => {
        setStart(true);
      });
    }
  };

  const animatedStyle = {
    transform: [
      {
        // scale: animatedValue, // x and y
        scale: animatedValue,
      },
    ],
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={startAnimation}>
          <Animated.View style={[{ height: 100, width: 100, backgroundColor: "red" }, animatedStyle]}>
            <Text>This side forward</Text>
          </Animated.View>
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
