/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';



const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 40,
    backgroundColor: 'blue',
    paddingTop: 15,
    color: 'white',
    textDecorationLine: 'underline', // underline, line-through, underline line-through 
    height: 60,
    width: 60,
    textAlign: 'center'
    // textAlign: 'center'
    // fontWeight: '900' // values 100 a 900
    // fontStyle: 'italic'
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2},
    // shadowOpacity: 0.4
  },
  TextStyle2: {
    fontSize: 40,
    backgroundColor: 'red',
    paddingTop: 15,
    color: 'white',
    textDecorationLine: 'underline', // underline, line-through, underline line-through 
    height: 60,
    width: 60,
    textAlign: 'center'
    // textAlign: 'center'
    // fontWeight: '900' // values 100 a 900
    // fontStyle: 'italic'
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2},
    // shadowOpacity: 0.4
  },
  viewStyle: {
    backgroundColor: 'skyblue',
    height: 300,
    //flex-start, center, flex-end, space-around, space-between
    justifyContent: 'space-around',   // values: flex-end, center,  
    alignItems: 'center',
    flexDirection: 'row'
  }
});

export default class frases extends Component {
  render() {

    const { TextStyle, viewStyle } = styles;

    return (
      <View style={viewStyle}>
        <Text style={styles.TextStyle}>
          A
        </Text>
        <Text style={styles.TextStyle2}>
          B
        </Text>
      </View>
    );
  }
}
