/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Botao from './src/component/Botao'

export default class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      frase: 'Frase do dia...'
    };

    this.geraFrase = this.geraFrase.bind(this);
  }

  geraFrase()
  {
    let frases = [
      'Não deixe ningue dizer que você não é capaz.',
      'Tenha força de vontade.',
      'A Realização dos seus sonhos depende só de você.',
      'Sempre acredito naquilo que você deseja conquistar.',
      'O caminho pode não ser fácil, mas não desista, pois a vitória virá.',
      'Tudo é possível para quem acredita.',
      'Confie em você e na sua capacidade.',
    ];

    let randomic = Math.floor(Math.random() * frases.length );

    let frase = frases[randomic];
    
    let s = this.state;
    
    s.frase = frase;

    this.setState(s);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./src/img/cookie.png")} />
        <Text style={styles.frase}>"{this.state.frase}"</Text>
        <Botao titulo='Quebrar Biscoito' executar={()=>{this.geraFrase()}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },

  frase:
  {
    color: 'red',
    fontSize: 24,
    fontStyle: 'italic',
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
  },

});
