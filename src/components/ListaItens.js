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

import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {

        constructor(props){
            super(props);
            this.state = {  listaItens : [] };
        }
    componentWillMount() {
        //requisicao https
        //http://faus.com.br/recursos/c/dmairr/api/itens.html
        axios.get('https://jsonplaceholder.typicode.com/photos').then(response=>{
            this.setState({listaItens:  response.data});
        }).catch(()=>{
            console.log(error);
        });
    }

  render() {
      
    return (
      <View>
          {console.log(this.state.listaItens)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
});

