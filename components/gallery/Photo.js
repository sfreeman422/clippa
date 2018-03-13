import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "../../styles/styles";

const Photo = ({ photo }) => (
  <TouchableOpacity style={styles.photoThumbContainer}>
    <Image style={styles.thumbnail} source={{ uri: photo.node.image.uri }} />
  </TouchableOpacity>
);

export default Photo;
