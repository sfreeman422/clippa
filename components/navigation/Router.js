import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import Home from "./Home";
import NavigationBar from "./NavigationBar";
import PhotoLibrary from "../gallery/PhotoLibrary";
import CameraView from "../camera/CameraView";
import colors from "../../styles/colors";

class Router extends Component {
  state = {
    backButton: false
  };

  shouldRenderBackButton = (bool, history) => {
    this.history = history;
    this.setState({ backButton: bool });
  };

  render() {
    return [
      <NavigationBar
        {...this.state}
        handleBackPress={() => {
          this.shouldRenderBackButton(false, this.history);
          this.history.push("/");
        }}
        key="navBar"
      />,
      <NativeRouter key="router">
        <View style={styles.container}>
          <Route exact path="/" component={Home} />
          <Route
            path="/cameraRoll"
            render={props => (
              <PhotoLibrary
                {...props}
                shouldRenderBackButton={this.shouldRenderBackButton}
              />
            )}
          />
          <Route
            path="/camera"
            render={props => (
              <CameraView
                {...props}
                shouldRenderBackButton={this.shouldRenderBackButton}
              />
            )}
          />
        </View>
      </NativeRouter>
    ];
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Router;
