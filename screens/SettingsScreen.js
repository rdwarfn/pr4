import React, { Component } from 'react';
import { ExpoConfigView } from '@expo/samples';
import { StyleSheet, View } from 'react-native';

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Setting',
  };

  render() {
    return (
      <ExpoConfigView />
    );
  }
}
