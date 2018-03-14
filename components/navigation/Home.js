import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
import colors from "../../styles/colors";

const Home = () => (
  <View
    style={{
      flexDirection: "column",
      justifyContent: "space-around",
      flex: 0.5
    }}
  >
    <Link
      to="/cameraRoll"
      component={TouchableOpacity}
      underlayColor="#f0f4f7"
      style={styles.navItem}
    >
      <Text style={styles.homeButton}> Camera Roll</Text>
    </Link>
    <Link
      to="/camera"
      component={TouchableOpacity}
      underlayColor="#f0f4f7"
      style={styles.navItem}
    >
      <Text style={styles.homeButton}> Take a photo</Text>
    </Link>
  </View>
);

const styles = StyleSheet.create({
  homeButton: {
    backgroundColor: colors.lightEmerald,
    letterSpacing: 2,
    padding: 30,
    fontSize: 20,
    borderColor: colors.darkGrey,
    borderWidth: 5,
    borderRadius: 10
  }
});

export default Home;
