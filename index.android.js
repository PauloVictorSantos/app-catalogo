/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ListaItens from './src/components/ListaItens';

export default class app4 extends Component {
  render() {
    return (
     
      <ListaItens/>
     
    );
  }
}

const styles = StyleSheet.create({
 
});

AppRegistry.registerComponent('app4', () => app4);
