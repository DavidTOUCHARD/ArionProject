import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView, SafeAreaView } from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import CompetitionsScreen from './screens/CompetitionsScreen'
import ListParcours from './screens/ListParcours'
import Plan2DScreen from './screens/Plan2DScreen';
import Parcours3DScreen from './screens/Parcours3DScreen';
import Parcours360Screen from './screens/Parcours360Screen';
import { hide } from 'expo/build/launch/SplashScreen';

export default class App extends React.Component{
  render(){
    return (     
      // <Image source = {require('./images/arion.jpg')} 
      // style={{ marginTop: 20, width: 120, height: 120 }}/>
  <AppDrawerNavigator/>
    )
  }
}
// export default function App() {
//   return (
//     <AppDrawerNavigator/>
//   );
// }
const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{height:150,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
    <Image source = {require('./images/icon192x192.png')}
    style={{ marginTop: 20, width: 100, height: 100, borderRadius: 20 }}/>
    </View>
      <ScrollView>
        <DrawerItems {...props}/>
      </ScrollView>
  </SafeAreaView>  
)
const AppDrawerNavigator = createDrawerNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require("./images/home.png")}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: tintColor }}
        />
      ),
    },
  },
  Settings:{
    screen: SettingsScreen,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require("./images/settings.png")}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: tintColor }}
        />
      ),
    },
  },

  Competitions:{
  screen: ListParcours,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require("./images/parcours.png")}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: tintColor }}
        />
      ),
    },
  },
  Liste:ListParcours,
  Plan2D:{
    screen: Plan2DScreen,
      navigationOptions: {
        drawerLabel: hide        
      },
  },
  Parcours3D:{
    screen: Parcours3DScreen,
      navigationOptions: {
        drawerLabel: hide        
      },
  },
  Parcours360:{
    screen: Parcours360Screen,
      navigationOptions: {
        drawerLabel: hide        
      },
  },
},{
  contentComponent: CustomDrawerComponent
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
