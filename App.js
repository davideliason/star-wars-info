import React from 'react';
import { StyleSheet,
         Text,
         View,
         Component,
         Image,
         ImageBackground } from 'react-native';
// import { ANOTHER_CONFIG } from 'react-native-dotenv'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
             source={require('./images/star_wars.jpeg')}
             style={{width: '100%', height: '100%'}}>

          <Text style={styles.title}> Star Wars Info</Text>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: { 
    flex: 1,
    alignItems: "center",
    paddingTop: 23 
  },
   backdrop: { 
    flex: 1, 
    flexDirection: "column" 
  },
  title: {
    color: 'yellow',
    textAlign: "center"
  }
});
