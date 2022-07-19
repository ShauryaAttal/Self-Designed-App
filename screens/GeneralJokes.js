import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';



export default class GeneralJokes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"orange"}}> General Jokes </Text>

        <Text style={styles.points}> 1) What do you call an elephant that doesn’t matter?   An irrelephant! </Text>
        <Text style={styles.points}> 2) Why does it take pirates a long time to learn the alphabet? Because they can spend years at C!</Text>

        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100 
    },
  points:{
    fontSize: 20
  },  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"orange",
    margin: 10,
    width: 200,
    height: 50,
  }
})