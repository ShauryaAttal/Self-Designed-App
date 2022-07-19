import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class MathJokes extends Component {
  render() {
    return (
      <View style={styles.container}>
<Text style={{ fontSize:30, backgroundColor:"red"}}> Math Jokes </Text>

        <Text style={styles.points}> 1) How does a mathematician plow fields?   With a pro-tractor. </Text>
        <Text style={styles.points}> 2) Did you hear about the mathematician who’s afraid of negative numbers?   He will stop at nothing to avoid them. </Text>

        <TouchableOpacity
              style={styles.buttons}
              onPress={() =>this.props.navigation.navigate('HomeScreen')}>
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
  },
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"red",
    margin: 10,
    width: 200,
    height: 50,
  }
})