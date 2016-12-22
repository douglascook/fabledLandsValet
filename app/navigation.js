import React, { Component } from 'react';
import { NavigationExperimental } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CharacterScreen from './components/character';
import character from './reducers';


const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;


function reducer(state, action, route) {
  if (!state) {
    return {
      index: 0,
      routes: [
        { key: 'character', component: CharacterScreen },
      ],
    };
  }
  switch (action) {
    case 'push': {
      return NavigationStateUtils.push(state, route);
    }
    case 'pop': {
      return NavigationStateUtils.pop(state);
    }
    default:
      return state;
  }
}

class TabNavigation extends Component {
  constructor() {
    super();
    this.state = { navState: reducer() };
    // TODO why does binding this when called in render fail?
    this.renderScene = this.renderScene.bind(this);
  }

  navigate(action, route) {
    const navState = reducer(this.state.navState, action, route);
    this.setState({ navState });
  }

  renderScene(props) {
    return (
      <props.scene.route.component
        navigate={(a, r) => this.navigate(a, r)}
      />
    );
  }

  render() {
    const { navState } = this.state;
    return (
      <NavigationCardStack
        navigationState={navState}
        renderScene={this.renderScene}
      />
    );
  }
}

let store = createStore(character);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabNavigation />
      </Provider>
    );
  }
}
