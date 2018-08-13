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
  ScrollView,
  Alert
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
        //https://api.myjson.com/bins/q8fbw
        axios.get('https://api.myjson.com/bins/q8fbw').then(response=>{
            this.setState({listaItens:  response.data});
            
        }).catch(error=>{
            Alert.alert(error.message);
        });
    }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#ddd'}}>
          {this.state.listaItens.map(item=> (<Itens key={item.id} item={item} />))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
 
});

