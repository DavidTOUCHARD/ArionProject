import React,{Component} from 'react';
import { StyleSheet,WebView, Text, View, Image } from 'react-native';

class Parcours3DScreen extends Component {
  render(){
      return (
        <WebView
        style={{ marginTop: 20, width: '100%', height: '100%' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowfullscreen={true}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        source={{ uri: "https://www.youtube.com/embed/Ccby77A9i7s" }}
      />
      );
  }
}

export default Parcours3DScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});