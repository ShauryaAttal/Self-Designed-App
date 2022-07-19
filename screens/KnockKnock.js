import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class KnockKnock extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"lightblue"}}> Knock Knock Jokes </Text>
    <Text style={styles.points}> 1) Knock, knock. {"\n"} Who’s there?   {"\n"} CD.   {"\n"} CD who?  {"\n"} CD person knocking on the door? </Text>

    <Text style={styles.points}> 2) Knock, knock. {"\n"} Who’s there?   {"\n"} Beets.   {"\n"} Beets who?  {"\n"} Beets me! </Text>
       
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
  },
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"lightblue",
    margin: 10,
    width: 200,
    height: 50,
  }
})