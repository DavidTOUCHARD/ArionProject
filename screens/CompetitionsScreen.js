import React,{Component} from 'react';
import { StyleSheet, WebView } from 'react-native';
//import WebView from 'react-native-webview-fullscreen'


class CompetitionsScreen extends Component {
  render(){
      return (
<WebView
        style={{ marginTop: 20, width: '100%', height: '100%' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowfullscreen={true}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        source={{ uri: "https://www.youtube.com/embed/a4FGQBJAuY4" }}
      />
      );
  }
}

export default CompetitionsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});