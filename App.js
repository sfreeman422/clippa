import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import PhotoLibrary from "./components/gallery/PhotoLibrary";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Router />
    </View>
  );
}

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

export const colors = {
  darkGrey: "#222",
  lightGrey: "#e9e9e9",
  emerald: "#2ecc71",
  lightEmerald: "#b1dfbb",
  gold: "#f6b01c",
  blue: "#3498db"
};

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

const styles = StyleSheet.create({
  nav: {
    height: 80,
    paddingTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  navText: {
    fontSize: 20,
    alignSelf: "center",
    flex: 0.5
  },
  navButton: {
    marginLeft: 20
  },
  navSpacer: {
    flex: 0.25
  },
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    alignItems: "center",
    justifyContent: "center"
  },
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
