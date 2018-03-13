import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/styles";

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

export default NavigationBar;
