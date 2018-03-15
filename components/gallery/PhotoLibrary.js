"use strict";

import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  CameraRoll
} from "react-native";
import Photo from "./Photo";

const window = Dimensions.get("window");

class PhotoLibrary extends Component {
  state = {
    photos: []
  };

  // TODO: maybe all children should just do this by default HOC???
  async componentDidMount() {
    this.props.shouldRenderBackButton(true, this.props.history);
    this.setState(await this.accessCameraRoll());
  }

  accessCameraRoll = () => {
    console.log(CameraRoll);
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
  };

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

const styles = StyleSheet.create({
  photoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: window.width,
    alignSelf: "center"
  }
});

export default PhotoLibrary;
