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
  Button,
  TouchableOpacity
} from 'react-native';

const btnPress = () => {
    alert('Botão pressionado');
  }

const styles = StyleSheet.create({ 
    main: {
      paddingTop: 40
    },
    touch: {
      margin: 50,
      padding: 20,
      borderColor: '#1d8eb8',
      borderWidth: 1,
      borderRadius: 2,
      backgroundColor: '#48BBEC',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4
    },
    text: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'center'
    }
});

export default class frases extends Component {
  


  render() {

    const { main, touch, text } = styles;

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

       <TouchableOpacity style={touch}>
         <Text style={text}>Clique Aqui</Text>
       </TouchableOpacity>

      </View>
    );
  }
}
