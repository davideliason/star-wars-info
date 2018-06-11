import React from 'react';
import { StyleSheet,
         Text,
         View,
         Component,
         Image,
         ImageBackground,
         TouchableHighlight,
          } from 'react-native';
import Button from './components/Button.js'
// import { ANOTHER_CONFIG } from 'react-native-dotenv'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressing: false };
  }

   _onPressIn = () => {
    this.setState({ pressing: true });
  };

  _onPressOut = () => {
    this.setState({ pressing: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
             source={require('./images/star_wars.jpeg')}
             style={{width: '100%',
                     height: '100%'}}>

            <Text style={styles.title}> Star Wars Info</Text>

            <Button />

        </ImageBackground>
      </View>
    );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
   container: { 
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 23 
  },
   backdrop: { 
    flex: 1, 
    flexDirection: "column" 
  },
  title: {
    color: 'yellow',
    textAlign: "center",
    fontSize: baseFontSize +10,
    paddingTop: 100
  },
  welcome: { fontSize: 20, textAlign: "center", margin: 10, color: "#FFFFFF" },
});


