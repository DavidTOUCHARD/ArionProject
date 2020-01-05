import React, { Component } from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import {createStackNavigator,StackNavigator}  from 'react-navigation'
import Plan2DScreen from './Plan2DScreen'
import Parcours3DScreen from './Parcours3DScreen'
//import Parcours3DScreen from './Parcours3Dcreen'
import Parcours360Screen from './Parcours360Screen'


export default class ListParcours extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 2,width: "90%", margin: 10, alignItems: "center", justifyContent: "center", marginHorizontal:10 }}>  
                <Text>Selection type vue</Text>  
                <Button 
                    title="Go to plan 2D"  
                    onPress={() => this.props.navigation.navigate('Plan2D')}  
                />
                 <Button  
                    title="Go to parcours 3D"  
                    onPress={() =>
                      navigate('Parcours3D')}  
                 />  
                  <Button  
                    title="Go to parcours 360°"  
                    onPress={() =>
                      navigate('Parcours360')} 
                 /> 
                <Button  
                    title="Go back"  
                    onPress={() => this.props.navigation.goBack()}  
                />  
            </View>  
    );
  }
}

const AppNavigator = createStackNavigator(  
  {  
    Plan2D:Plan2DScreen,
    Parcours3D:Parcours3DScreen,
    Parcours360:Parcours360Screen,
}  
);  
// const App = StackNavigator({
//   Plan2D: { screen: Plan2DScreen },
//   Parcours3D: { screen: Parcours3DScreen },
//   Parcours360: { screen: Parcours360Screen },
// });

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
