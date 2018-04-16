import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Input from './Input';
import Riwayat from './Riwayat';
import HomeScreen from './HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <LoginStack />
    );
  }
}


const HomeStack = StackNavigator({
  Home: { screen: HomeScreen }
},
{
  navigationOptions:
  {
      header: false,
  }
}
);

const Screen = TabNavigator({
  Input: { screen: Input },
  View: { screen: Riwayat },
});

const LoginStack = StackNavigator({
  Home: { screen: HomeStack },
  Screen: { screen: Screen }

},
{
  navigationOptions:
  {
      header: false,
  }
}
);
