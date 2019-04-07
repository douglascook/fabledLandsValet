import React, {
  Component
} from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import {
  connect
} from 'react-redux';

import RNFS from 'react-native-fs';

import sharedStyles from '../shared/styles';


class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      saved: false,
      errors: '',
    };
  }

  dumpStateToFile() {
    const now = Date.now();
    const path = `${RNFS.DocumentDirectoryPath}/fabledLandsCharacter_${now}.json`;
    const currentState = JSON.stringify(this.props.state);
    RNFS.writeFile(path, currentState, 'utf8')
      .then(() => this.setState({ saved: true }))
      .catch(err => this.setState({ errors: err }));
  }

  render() {
    return (
      <View style={sharedStyles.container}>

        <Text style={sharedStyles.headerText}>
          Settings
        </Text>

        <View style={sharedStyles.paddedCentred}>

          <Button
            title="Save to file"
            onPress={() => this.dumpStateToFile()}
          />
          { this.state.saved &&
            <Text> {'Save successful!'}  </Text>
          }
        </View>

      </View>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(
  mapStateToProps,
)(Settings);
