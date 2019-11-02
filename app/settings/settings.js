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

import PropTypes from 'prop-types';

import RNFS from 'react-native-fs';

import {
  createNewCharacter,
} from '../actions';

import sharedStyles from '../shared/styles';


class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      saveFiles: [],
      errors: '',
    };
    // create saves directory if it doesn't already exist
    // TODO better place to do this?
    RNFS.mkdir(`${RNFS.DocumentDirectoryPath}/saves`);
  }

  dumpStateToFile() {
    const { characterName, state } = this.props;
    const path = `${RNFS.DocumentDirectoryPath}/saves/${characterName}`;
    const currentState = JSON.stringify(state);
    RNFS.writeFile(path, currentState, 'utf8')
      .catch((err) => this.setState({ errors: err }));
  }

  createNewCharacter() {
    this.props.createNewCharacter('Jim Greybeard', 'Mage');
  }

  loadFiles() {
    const savesDir = `${RNFS.DocumentDirectoryPath}/saves`;
    RNFS.readDir(savesDir)
      .then((result) => this.setState({ saveFiles: result.map(f => f.path)}))
      .catch((err) => this.setState({ errors: err }));
  }

  render() {
    const { saveFiles, newCharacterVisible } = this.state;

    return (
      <View style={sharedStyles.container}>

        <Text style={sharedStyles.headerText}>
          Settings
        </Text>

        <View style={sharedStyles.paddedCentred}>

          <Button
            title="New Character"
            onPress={() => this.createNewCharacter()}
          />

          <Button
            title="Save to file"
            onPress={() => this.dumpStateToFile()}
          />

          <Button
            title="Load saves"
            onPress={() => this.loadFiles()}
          />

          { (saveFiles.length > 0) &&
            <Text>{ saveFiles[saveFiles.length - 1] }</Text> }
        </View>

      </View>
    );
  }
}

Settings.propTypes = {
  characterName: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  createNewCharacter,
};

const mapStateToProps = state => ({
  characterName: state.character.name.value,
  state,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
