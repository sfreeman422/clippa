import React from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import { RNCamera } from "react-native-camera";

import colors from "../../styles/colors";
const window = Dimensions.get("window");

export default class CameraView extends React.Component {
  camera = null;

  // TODO: maybe all children should just do this by default HOC???
  componentDidMount() {
    this.props.shouldRenderBackButton(true, this.props.history);
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  render() {
    return (
      <View>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={"Permission to use camera"}
          permissionDialogMessage={
            "We need your permission to use your camera phone"
          }
        />
        <View
          style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
        >
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    width: window.width
  },
  capture: {
    flex: 0,
    backgroundColor: colors.lightEmerald,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20,
    height: 60,
    width: 60,
    borderRadius: 60
  }
});
