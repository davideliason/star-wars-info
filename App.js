import React from 'react';
import { StyleSheet,
         Text,
         View,
         Component,
         Image,
         ImageBackground,
         TouchableHighlight,
          } from 'react-native';
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

            <TouchableHighlight
              style={styles.touchable}
              onPressIn={this._onPressIn}
              onPressOut={this._onPressOut}
            >
                <View>
                    <Text style={styles.title}>
                       {this.state.pressing ? "EEK!" : "PUSH ME"}
                    </Text>
                </View>
            </TouchableHighlight>

        </ImageBackground>
      </View>
    );
  }
}


const baseFontSize = 16;

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
    textAlign: "center",
    fontSize: baseFontSize +10,
    paddingTop: 100
  },
   touchable: { borderRadius: 100 },
  button: {
    backgroundColor: "#FF0000",
    borderRadius: 100,
    height: 200,
    width: 200,
    justifyContent: "center"
  }
});
