import React, {Component} from 'react';
import {
  AppRegistry,
  Navigator,
  TouchableHighlight,
  View,
  Text,
  StyleSheet
} from 'react-native';

import Character from './app/components/character';
import Inventory from './app/components/inventory.js';

class FabledLandsValet extends Component {
  constructor() {
    super();
    this.routes = [
      {id: 'character', index: 0},
      {id: 'inventory', index: 1}
    ];
  }

  render() {
    return (
      <Navigator
        initialRoute={this.routes[0]}
        initialRouteStack={this.routes}
        renderScene={(r, n) => this.renderScene(r, n)}
      />
    );
  }

  renderScene(route, navigator) {
    let component;
    switch (route.id) {
      case 'character':
        component = <Character/>;
        break;
      case 'inventory':
        component = <Inventory/>;
    }
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          {component}
        </View>
        <NavBar navigator={navigator}
                nextRoute={this.routes[route.index + 1]} />
      </View>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <View style={styles.navRow}>
        <TouchableHighlight onPress={() => this.props.navigator.pop()}>
          <Text> BACK! </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={
          () => this.props.navigator.push(this.props.nextRoute)
        }>
          <Text> FORWARD! </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  navRow: {flex: 1, flexDirection: 'row', justifyContent: 'space-between',
           alignItems: 'flex-end'}
});

AppRegistry.registerComponent('fabledLandsValet', () => FabledLandsValet);
