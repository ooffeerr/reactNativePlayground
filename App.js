import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
    render() {
        return (
            <View style = {{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}}>
                    <View style={{flex: 1, backgroundColor: 'red'}}/>
                    <View style={{flex: 1, backgroundColor: 'yellow'}}/>
                    <View style={{flex: 1, backgroundColor: 'green'}}/>
                </View>
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);

