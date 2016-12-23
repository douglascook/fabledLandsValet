import React, { Component } from 'react';
import { NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';

import Character from './components/character';
import Inventory from './components/inventory';

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;


class Navigation extends Component {
  renderScene(props) {
    switch (props.scene.route.key) {
      case 'character':
        return <Character />;
      case 'inventory':
        return <Inventory />;
    }
  }

  render() {
    return (
      <NavigationCardStack
        navigationState={this.props.navState}
        renderScene={p => this.renderScene(p)}
      />
    );
  }
}

const mapStateToProps = state => (
  { navState: state.navigation }
);

export default connect(
  mapStateToProps,
)(Navigation);
