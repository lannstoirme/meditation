import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CardList from './src/tracks/CardList';
import { render } from 'react-dom';

class App extends Component {
  render() {
  return (
   <CardList />
  );
}};

export default App;
