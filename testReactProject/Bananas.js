import React from 'react';
import { AppRegistry, Image, Alert } from 'react-native';

class Bananas extends React.Component {
  static BananaFunction(){
    Alert.alert("BANANAS ON THE WAY GO AWAY !!!!")
  }
}

const Banana = new Bananas();
export default Bananas;
