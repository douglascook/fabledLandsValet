import React, {
  Component,
} from 'react';

import {
  connect,
} from 'react-redux';

import {
  View,
  Text,
} from 'react-native';

import sharedStyles from '../shared/styles';


class Stashes extends Component {

  render() {
    return (
      <View style={sharedStyles.container}>

        <Text style={sharedStyles.headerText}>
          Stashes
        </Text>

      </View>
    );
  }
}

const mapStateToProps = state => ({
  possessions: state.possessions,
});

export default connect(
  mapStateToProps,
)(Stashes);
