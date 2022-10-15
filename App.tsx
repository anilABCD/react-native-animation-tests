import React, { useState } from "react";
import { Animated, StyleSheet, SafeAreaView, ScrollView, TouchableWithoutFeedback, View } from "react-native";
import Translate from "./Translate";
export default function App() {
  return (
    <SafeAreaView>
      <Translate></Translate>
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
