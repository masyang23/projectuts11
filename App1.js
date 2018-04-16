import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import Input from './Input';
import Riwayat from './Riwayat';

class HomeScreen extends React.Component {
  render() {
    return (
      <Input />
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
    <Riwayat />
    );
  }
}

export default TabNavigator({
  Input: { screen: HomeScreen },
  View: { screen: SettingsScreen },
});
