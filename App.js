import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

import sciDb from "./sciencedb"
import mathDb from "./mathdb"
import genDb from "./generaldb"
import knockDb from "./knockknockdb"



// You can import from local files
import HomeScreen from './screens/HomeScreen';
import GeneralJokes from './screens/GeneralJokes';
import MathJokes from './screens/MathJokes';
import KnockKnock from './screens/KnockKnock';
import ScienceJokes from './screens/ScienceJokes';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  ScienceJokes: ScienceJokes,
  MathJokes: MathJokes,
  KnockKnock: KnockKnock,
  GeneralJokes: GeneralJokes,
});

const AppContainer = createAppContainer(AppNavigator);
