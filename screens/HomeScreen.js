import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AssetExample';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.sciButton}
              onPress={() => this.props.navigation.navigate('ScienceJokes')}>
              <Text style={{ fontSize:20, color:"white"}}>Science Jokes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.mathButton}
              onPress={() => this.props.navigation.navigate('MathJokes')}>
              <Text style={{ fontSize:20, color:"white"}}>Math Jokes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.genButton}
              onPress={() => this.props.navigation.navigate('GeneralJokes')}>
              <Text style={{ fontSize:20, color:"white"}}>General Jokes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.knockButton}
              onPress={() => this.props.navigation.navigate('KnockKnock')}>
              <Text style={{ fontSize:20, color:"black"}}>Knock Knock Jokes</Text>
            </TouchableOpacity>
            
          </View>
         
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  sciButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"green",
    margin: 10,
    width: 200,
    height: 50,
  },
  mathButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"red",
    margin: 10,
    width: 200,
    height: 50,
  },
  genButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"orange",
    margin: 10,
    width: 200,
    height: 50,
  },
  knockButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"lightblue",
    margin: 10,
    width: 200,
    height: 50,
  },
    
 
});
