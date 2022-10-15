import React, { useState } from "react";
import { Animated, StyleSheet, SafeAreaView, ScrollView, TouchableWithoutFeedback, View } from "react-native";
import Opacity from "./AnimationsILearnedAndWrote/Opacity";
import Translate from "./AnimationsILearnedAndWrote/Translate";
import Flipping from "./AnimationsILearnedAndWrote/Flipping";
import Scale from "./AnimationsILearnedAndWrote/Scale";
import HeightAndWidth from "./AnimationsILearnedAndWrote/HeightAndWidth";

export default function App() {
  return (
    <SafeAreaView>
      <HeightAndWidth />
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
