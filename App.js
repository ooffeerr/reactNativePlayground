import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {

  constructor(props) {
    super(props);
    this.state = {shouldShow: true};


    setInterval(() => {
      this.setState(prevState => {
          return { shouldShow: !prevState.shouldShow };
      });
    }, 1000);
  }

  render() {
    let display = this.state.shouldShow ? "lslsls" : "LDLDLDLDL"
    return (
      <Text>{display}</Text>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Blink name='Rexxar' />
        <Blink name='Jaina' />
        <Blink name='Valeera' />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfBlinks);
