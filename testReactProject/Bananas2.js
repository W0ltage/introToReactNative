import React from 'react';
import {View, Text, Button, Image, Alert } from 'react-native';

export default class Bananas2 extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tab2'
  }

  render(){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style = {{fontSize: 35}}>
            This is second bananas tab
        </Text>
      </View>
    );
  }

}
