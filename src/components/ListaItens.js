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

export default class ListaItens extends Component {

    constructor(props){
        super(props);
        console.log("construindo a aplicação");
    }

componentWillMount(){
    console.log("fazer alguma coisa antes de renderizar");
}

componentDidMount(){
    console.log("fazer alguma coisa depois de renderizar");
}

  render() {
      console.log("objecto é renderizado")
    return (
      <Text>Inportação de compoente</Text>
    );
  }
}

const styles = StyleSheet.create({
 
});

