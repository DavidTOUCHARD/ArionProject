import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class HomeScreen extends Component {
  render(){
      return (
          // <View style ={styles.container}>
          //    <Text>HomeScreen</Text>
              
              <Image source = {require('C:/ReactNative/Arion/images/arion_logo.jpg')} 
              style={{ marginTop: 20, width: '100%', height: '100%' }}/>
          // </View>
      );
  }
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});