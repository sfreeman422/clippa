"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  CameraRoll,
  Image,
  TouchableOpacity
} from "react-native";

import Dimensions from "Dimensions";

const window = Dimensions.get("window");

export default class PhotoLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  async componentDidMount() {
    this.props.shouldRenderBackButton(true, this.props.history);
    this.setState(await accessCameraRoll());
  }

  render() {
    return (
      <View style={styles.LibraryViewContainer}>
        <ScrollView contentContainerStyle={styles.photoContainer}>
          {!!this.state.photos.length ? (
            this.state.photos.map(photo => (
              <Photo key={photo.node.image.uri} photo={photo} />
            ))
          ) : (
            <Text> Loading photos... </Text>
          )}
        </ScrollView>
      </View>
    );
  }
}

const Photo = ({ photo }) => (
  <TouchableOpacity style={styles.photoThumbContainer}>
    <Image style={styles.thumbnail} source={{ uri: photo.node.image.uri }} />
  </TouchableOpacity>
);

function accessCameraRoll() {
  return CameraRoll.getPhotos({ first: 20 })
    .then(photos =>
      Promise.resolve({
        photos: photos.edges
      })
    )
    .catch(e =>
      Promise.resolve({
        error: true,
        errorMessage: e.message
      })
    );
}

const styles = StyleSheet.create({
  photoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: window.width,
    alignSelf: "center"
  },
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
