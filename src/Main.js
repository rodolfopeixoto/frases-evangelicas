/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const btnPress = () => {
    alert('Botão pressionado');
  }

const styles = StyleSheet.create({ 
    main: {
      paddingTop: 40
    },
});

export default class frases extends Component {
  


  render() {

    const { main } = styles;

    return (
      <View style={main}>
        <Text>Olá, Rodolfo Peixoto</Text>
        <Text>O Aplicativo de mensagens</Text>
        <Button 
        onPress={btnPress}
         color='blue'
          title="Visualizar mensagem"
          accessibilityLabel="Clique para abrir as notícias"
        />
      </View>
    );
  }
}
