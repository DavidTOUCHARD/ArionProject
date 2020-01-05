import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Plan2DScreen extends Component {
  render(){
      return (
        <Image source = {require('C:/ReactNative/Arion/images/plan2D.png')} 
        style={{ marginTop: 20, width: '100%', height: '100%' }}/>
      );
  }
}

export default Plan2DScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});