import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FixedDimensionsBasics extends Component {


    colorizedStyle(color) {
        var standardSizeMap = {width : 50, height: 50};
        return  {...standardSizeMap, ...{backgroundColor: color}};
    }
    render() {



        return (

            <View style = {{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'powderblue', flexDirection: 'column'}}>
                    <View style={{flex: 1, backgroundColor: 'red'}}/>
                    <View style={this.colorizedStyle('yellow')}/>
                    <View style={this.colorizedStyle('green')}/>
                </View>
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);

