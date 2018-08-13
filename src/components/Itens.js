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
  Image,
  Linking
} from 'react-native';

export default class Itens extends Component {

  render() {
      
    return (
      <View style={styles.item}> 
      <View style={styles.foto}>
        <Image  style={{height:100, width:100}} source = {{uri : this.props.item.thumbnailUrl}} />
      </View>
      <View style={styles.detalhesItens}>
          <Text style={styles.txtTitulo}>{this.props.item.title}</Text>
          <Text>ID: {this.props.item.albumId}</Text>
          <Text  style ={styles.link} onPress={() => Linking.openURL(this.props.item.url)}>Url: {this.props.item.url}</Text>
        </View>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
 item:{
   borderWidth:0.5,
   borderColor: '#999',
   margin: 10,
   padding: 10,
   flexDirection: 'row',
   backgroundColor: '#FFF'
 },
 foto:{
   width:102,
   height: 102
 },
 detalhesItens:{
   marginLeft: 10,
   flex: 1
 },
 txtTitulo:{
   fontSize: 18,
   color: 'blue',
   marginBottom: 5
 },
 link:{
  fontSize: 12,
  color: '#2980b9'
 }
});

