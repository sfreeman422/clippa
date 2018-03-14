import React from "react";
import { StyleSheet, View, Text } from "react-native";

const NavigationBar = ({ backButton, handleBackPress }) => (
  <View style={styles.nav}>
    <View style={styles.navSpacer}>
      {backButton && (
        <Text onPress={handleBackPress} style={styles.navButton}>
          {" "}
          {"<"} Back{" "}
        </Text>
      )}
    </View>
    <Text style={styles.navText}>clippR ✂️ ✂️ ✂️ ✂️</Text>
    <View style={styles.navSpacer} />
  </View>
);

const styles = StyleSheet.create({
  nav: {
    height: 80,
    paddingTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  navText: {
    fontSize: 20,
    alignSelf: "center",
    flex: 0.5
  },
  navButton: {
    marginLeft: 20
  },
  navSpacer: {
    flex: 0.25
  }
});
export default NavigationBar;
