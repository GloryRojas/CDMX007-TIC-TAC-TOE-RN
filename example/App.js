import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: [
        [0,0,0],
        [0,0,0],
        [0,0,0],
      ],
      currentPlayer: 1,
    }
  }

  componentDidMount() {
    this.initializeGame();
  }

  initializeGame = () => {
    this.setState({
      gameState: [
        [0,0,0],
        [0,0,0],
        [0,0,0],
      ]
    })
  }

  onTilePress = (row, col) => {
    const value = this.state.gameState[row][col];
    if ( value !== 0) {return;}

    const currentPlayer = this.state.currentPlayer;

    let arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState: arr});

    var nextPlayer = (currentPlayer == 1) ? -1 : 1;
    this.setState({currentPlayer: nextPlayer});
  }

  renderIcon = (row, col) => {
    let value = this.state.gameState[row][col];
    switch(value)
    {
      case 1: return <Icon name="close" style={styles.tilex} />;
      case -1: return <Icon name="circle-outline" style={styles.tileo} />;
      default: return <View />;
    }
  }

  render() { 
    return (
      <View style={styles.container}>

        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={() => this.onTilePress(0,0)} style={styles.tile}>
            {this.renderIcon(0,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(0,1)} style={styles.tile}>
            {this.renderIcon(0,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(0,2)} style={styles.tile}>
            {this.renderIcon(0,2)}
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={() => this.onTilePress(1,0)} style={styles.tile}>
            {this.renderIcon(1,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1,1)} style={styles.tile}>
            {this.renderIcon(1,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1,2)} style={styles.tile}>
            {this.renderIcon(1,2)}
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={() => this.onTilePress(2,0)} style={styles.tile}>
            {this.renderIcon(2,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2,1)} style={styles.tile}>
            {this.renderIcon(2,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2,2)} style={styles.tile}>
            {this.renderIcon(2,2)}
          </TouchableOpacity>
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
