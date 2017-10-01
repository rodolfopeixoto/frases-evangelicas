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
    main: {
      flex: 1, //ocupa 1:1 um total de 1 par 1
      backgroundColor: 'cornflowerblue'
    },
    header:{
      flex: 2, //ocupa 2:11 um total de 2 para 11
      backgroundColor: 'brown'
    },
    content:{
      flex: 8, //ocupa 8:11 um total de 8 para 11
      backgroundColor: 'darkblue'
    },
    footer: {
      flex: 1, //ocupa 1:11 um total de 1 para 11
      backgroundColor: 'orangered'
    }
});

export default class frases extends Component {
  render() {

    const { main, header, content, footer } = styles;

    return (
      <View style={main}>
        <Text style={header}>
          HEADER
        </Text>
        <Text style={content}>
          CONTENT
        </Text>
        <Text style={footer}>
          FOOTER
        </Text>
      </View>
    );
  }
}
