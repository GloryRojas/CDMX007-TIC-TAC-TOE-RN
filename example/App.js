import React from 'react';
import {StyleSheet, View} from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: [],
      currentPlayer: 1,
    }
  }


  render() { 
    return (
      <View style={styles.container}>

        <View style={{flexDirection: "row"}}>
          <View style={styles.tile}>
            <Icon name="close" style={styles.tilex} />
          </View>
          <View style={styles.tile}>
            <Icon name="circle-outline" style={styles.tileo} />
          </View>
          <View style={styles.tile}>

          </View>
        </View>

        <View style={{flexDirection: "row"}}>
          <View style={styles.tile}>
          
          </View>
          <View style={styles.tile}>
          
          </View>
          <View style={styles.tile}>
          
          </View>
        </View>

        <View style={{flexDirection: "row"}}>
          <View style={styles.tile}>
          
          </View>
          <View style={styles.tile}>
          
          </View>
          <View style={styles.tile}>
          
          </View>
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile: {
    borderWidth: 3,
    width: 100,
    height: 100,
  },
  tilex: {
    color: "red",
    fontSize: 90,
    alignItems: "center",
    justifyContent: "center"
  },
  tileo: {
    color: "green",
    fontSize: 90,
    alignItems: "center",
    justifyContent: "center"
  }
});
