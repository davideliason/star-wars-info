import React from 'react';
import { StyleSheet,
         Text,
         View,
         Component,
         Image } from 'react-native';
// import { ANOTHER_CONFIG } from 'react-native-dotenv'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Star Wars Info</Text>
        <Image source={ require('./images/star_wars.jpeg')}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'deepskyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignItems: 'center',
    color: 'yellow'
  }
});
