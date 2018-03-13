import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
import styles from "../../styles/styles";

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
      to="/cameraRoll"
      component={TouchableOpacity}
      underlayColor="#f0f4f7"
      style={styles.navItem}
    >
      <Text style={styles.homeButton}> Take a photo</Text>
    </Link>
  </View>
);

export default Home;
