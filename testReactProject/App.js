import React from 'react';
import { StyleSheet, Text, View, Alert, Platform,Button } from 'react-native';
import Banana from './Bananas.js';

export default class App extends React.Component {

  constructor(props){
    super(props)

    Obj = new Second();
  }

  CallFunction1 = () => {
    Banana.BananaFunction();
  }

  CallFunction2 = () =>{
    Obj.SecondClassFunctionWithArgument("HELLO WORLD");
  }


  render() {
    return (
      <View style={styles.MainContainer}>

        <View style={{margin: 10}}>

          <Button title="Call Another Class Function Without Argument" onPress={this.CallFunction1} />

        </View>

        <View style={{margin: 10}}>

          <Button title="Call Another Class Function With Argument" onPress={this.CallFunction2} />

        </View>
       
      </View>
    );
  }
}


class Second extends React.Component{
    SecondClassFunction=() => {

      Alert.alert("Second Class Called");

    }

    SecondClassFunctionWithArgument=(Value)=>{
 
      Alert.alert(Value);
   
    }
}


const styles = StyleSheet.create(
  {
    MainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#F5FCFF',
      paddingTop: (Platform.OS) === 'ios' ? 20 : 0
    }
  
  });