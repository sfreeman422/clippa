import { StyleSheet, Dimensions } from "react-native";
import colors from "./colors";

const window = Dimensions.get("window");

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
  },
  photoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: window.width,
    alignSelf: "center"
  }
});

export default styles;
