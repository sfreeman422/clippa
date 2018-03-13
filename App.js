import React from "react";
import { View } from "react-native";
import Router from "./components/navigation/Router";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Router />
    </View>
  );
}
