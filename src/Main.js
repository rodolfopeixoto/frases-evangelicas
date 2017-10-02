import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

const generateNewPhase = () => {
    var randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * 20);
    

    var phrases = Array();
    phrases[0] = "Felizes são os que ouvem a palavra de Deus e a guardam - Lucas 11:28";
    phrases[1] = "Se Cristo vos libertar, verdadeiramente sereis livres. - João 8:36 ";
    phrases[2] = "Ainda que eu ande pelo vale da sombra da morte, não temerei mal nenhum, porque tu estás comigo; o teu bordão e o teu cajado me consolam.” (Salmos 23.4 – RA)";
    phrases[3] = "Não fui eu que lhe ordenei? Seja forte e corajoso! Não se apavore, nem se desanime, pois o Senhor, o seu Deus, estará com você por onde você andar”.” (Josué 1.9 – NVI)";
    phrases[4] = "Porque não tenho prazer na morte de ninguém, diz o SENHOR Deus. Portanto, convertei-vos e vivei.” (Ezequiel 18.32 – RA)";
    phrases[5] = "Mas a vida não vale nada, a menos que eu viva para fazer a obra que o Senhor Jesus me destinou – a obra de contar aos outros a Boa Nova da graça e do amor de Deus”. (Atos 20.24 – Bíblia Viva)";
    phrases[6] = "Querido Deus, graças Te dou por me ouvir, me guardar e por fazer de tudo para me ver sorrir! (Salmo 64)";
    phrases[7] = "Enquanto há vida, há esperança. (Eclesiastes 9:4)";
    phrases[8] = "O Senhor te abençoe e te guarde. O Senhor faça resplandecer o seu rosto sobre ti, e tenha misericórdia de ti. O Senhor sobre ti levante o seu rosto e te dê a paz. (Números 6:24-26)";
    phrases[9] = "O próprio Senhor irá à sua frente e estará com você; ele nunca o deixará, nunca o abandonará. Não tenha medo! Não se desanime! (Deuteronômio 31:8)";
    phrases[10] = "Querido Deus, Tu és minha proteção, a minha fortaleza. Tu és o meu Deus, eu confio em Ti. (Salmo 91:2)";
    phrases[11] = "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta. - 1 Coríntios 13:4-7";
    phrases[12] = "Então Pedro aproximou-se de Jesus e perguntou: 'Senhor, quantas vezes deverei perdoar a meu irmão quando ele pecar contra mim? Até sete vezes?' Jesus respondeu: 'Eu digo a você: Não até sete, mas até setenta vezes sete. Mateus 18:21-22'";
    phrases[13] = "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar. - Josué 1:9";
    phrases[14] = "Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro. - Jeremias 29:11";
    phrases[15] = "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e te conceda graça; o Senhor volte para ti o seu rosto e te dê paz. Números 6:24-26";
    phrases[16] = "Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa. - Isaías 41:10";
    phrases[17] = "Então cada um foi para a sua casa. - João 7:53";
    phrases[18] = "Portanto, não se preocupem com o amanhã, pois o amanhã trará as suas próprias preocupações. Basta a cada dia o seu próprio mal. - Mateus 6:34";
    phrases[19] = "Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe. - Mateus 19:6";
    phrases[20] = "Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna. - João 3:16"

    Alert.alert('Frases Evangelicas',phrases[randomNumber]);

  }

const styles = StyleSheet.create({ 
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
     
    },
    logo: {
      alignSelf: 'center',
      width:300,
      height: 300
    },
    btn:{
      backgroundColor: '#51bcb6',
      paddingVertical: 10,
      paddingHorizontal: 40
    },
    btnText:{
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
    },
    logoRodolfo: {
      
    }
});

export default class frases extends Component {

  render() {

    const { main, logo, btn, btnText, logoRodolfo } = styles;

    return (
      <View style={main}>
        
        <Image style={logo} source={require('./images/logo.png')} />
        
        <TouchableOpacity 
        onPress={generateNewPhase}
        style={btn}
        >
          <Text style={btnText}>Nova Frase</Text>
        </TouchableOpacity>
        

      </View>
    );
  }
}
