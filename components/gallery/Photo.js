import React from "react";
import { StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";

const window = Dimensions.get("window");

const Photo = ({ photo }) => (
  <TouchableOpacity style={styles.photoThumbContainer}>
    <Image style={styles.thumbnail} source={{ uri: photo.node.image.uri }} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  photoThumbContainer: {
    width: window.width / 3,
    justifyContent: "center",
    alignItems: "center",
    height: window.width / 3
  },
  thumbnail: {
    marginTop: 5,
    width: window.width / 3.1,
    height: window.width / 3.1
  }
});
export default Photo;
