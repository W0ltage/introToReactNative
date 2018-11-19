import React from 'react';
import { StyleSheet, Text, View, Alert, Platform,Button } from 'react-native';
import {createMaterialTopTabNavigator, createTabNavigator, createAppContainer, TabNavigator} from 'react-navigation';
import Bananas from './Bananas'
import Bananas2 from './Bananas2'

var Navigator = createMaterialTopTabNavigator({
  Tab1: {screen: Bananas},
  Tab2: {screen: Bananas2}
},{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    style: {
      backgroundColor: 'black',
    },
    inactiveBackgroundColor: 'black',
    labelStyle: {
      fontSize: 16,
      padding: 10,  
      color: 'yellow'
    }
  }
}) 


Navigator.navigationOptions = {
    title: "TabExample"
};

const app = createAppContainer(Navigator);

export default app;

/*
export default class App extends React.Component {

  constructor(props){
    super(props)

    Obj = new Second();

  }

  CallFunction1 = () => {
    <createBottomTabNavigator/>
    //Banana.BananaFunction();
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

*/
