import React, { Component } from "react";
import { View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import Home from "./Home";
import NavigationBar from "./NavigationBar";
import PhotoLibrary from "../gallery/PhotoLibrary";
import styles from "../../styles/styles";

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backButton: false
    };
    this.shouldRenderBackButton = this.shouldRenderBackButton.bind(this);
  }

  shouldRenderBackButton(bool, history) {
    this.history = history;
    this.setState({ backButton: bool });
  }

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
        </View>
      </NativeRouter>
    ];
  }
}

export default Router;
