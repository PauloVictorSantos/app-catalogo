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

import Itens from './Itens';

export default class ListaItens extends Component {

  render() {
      
    return (
      <View>
          <Itens/>
          <Itens/>
          <Itens/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
});

