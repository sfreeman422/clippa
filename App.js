import React from 'react';
import { StyleSheet, Text, View, Button, CameraRoll } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraRoll: {},
      error: false,
      errorMessage: '',
    }
    this.accessCameraApi = this.accessCameraApi.bind(this);
    this.accessCameraRoll = this.accessCameraRoll.bind(this);
  }
  accessCameraApi() {
    console.log('Accessing camera api');
  }
  accessCameraRoll() {
    console.log('Accessing camera roll');
    CameraRoll.getPhotos({first: 20})
      .then(photos => {
        this.setState({
          cameraRoll: photos,
        });
        console.log(photos);
      })
      .catch(e => {
        this.setState({
        error: true,
        errorMessage: e.message,
      });
      });
  }
  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        {this.state.error === true ? <Text style={styles.error}>{this.state.errorMessage}</Text> : <Text>Press below to take a picture and begin!</Text>}
        <View style={styles.buttons}>
          <Button onPress={this.accessCameraRoll} title="From Camera Roll" color="blue" />
          <Button onPress={this.accessCameraApi} title="Take a picture" color="steelblue" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flex: 0,
    flexDirection: 'row',
  },
  error: {
    color: 'red',
  }
});
