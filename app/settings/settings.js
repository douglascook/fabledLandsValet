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
  loadSave,
} from '../actions';

import sharedStyles from '../shared/styles';

import NewCharacterModal from './newCharacterModal';
import LoadCharacterModal from './loadCharacterModal';


class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      saveFiles: [],
      errors: '',
      newCharacterVisible: false,
      loadCharacterVisible: false,
    };
    // create saves directory if it doesn't already exist
    // TODO better place to do this?
    this.savesDir = `${RNFS.DocumentDirectoryPath}/saves`;
    RNFS.mkdir(this.savesDir);
  }

  openLoadCharacterModal() {
    RNFS.readDir(this.savesDir)
      .then((result) => result.map((f) => f.path))
      .then((paths) => this.setState({ saveFiles: paths }));
    this.setState({ loadCharacterVisible: true });
  }

  createCharacter(name, profession) {
    // save the current character first
    this.saveCurrentCharacter();
    this.props.createNewCharacter(name, profession);
    this.props.navigation.navigate('character');
  }

  loadCharacter(filepath) {
    // save the current character first
    this.saveCurrentCharacter();

    const { loadSave, navigation } = this.props;
    RNFS.readFile(filepath)
      .then((content) => loadSave(JSON.parse(content)))
      .then(() => this.setState({ loadCharacterVisible: false }))
      .then(() => navigation.navigate('character'));
  }

  saveCurrentCharacter() {
    const { characterName, state } = this.props;
    const path = `${this.savesDir}/${characterName}`;
    const currentState = JSON.stringify(state);
    RNFS.writeFile(path, currentState, 'utf8')
      .catch((err) => this.setState({ errors: err }));
  }

  render() {
    const { saveFiles, newCharacterVisible, loadCharacterVisible } = this.state;

    return (
      <View style={sharedStyles.container}>

        <Text style={sharedStyles.headerText}>
          Settings
        </Text>

        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          <View style={[sharedStyles.paddedCentred, { flex: 0.2, justifyContent: 'space-around' }]}>

            <Button
              title="New Character"
              onPress={() => this.setState({ newCharacterVisible: true })}
            />

            <Button
              title="Load Character"
              onPress={() => this.openLoadCharacterModal()}
            />
          </View>
        </View>

        <NewCharacterModal
          visible={newCharacterVisible}
          create={(name, profession) => this.createCharacter(name, profession)}
          onRequestClose={() => this.setState({ newCharacterVisible: false })}
        />

        <LoadCharacterModal
          visible={loadCharacterVisible}
          filepaths={saveFiles}
          loadFile={(f) => this.loadCharacter(f)}
          onRequestClose={() => this.setState({ loadCharacterVisible: false })}
        />

      </View>
    );
  }
}

Settings.propTypes = {
  characterName: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  createNewCharacter: PropTypes.func.isRequired,
  loadSave: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  createNewCharacter,
  loadSave,
};

const mapStateToProps = (state) => ({
  characterName: state.character.name.value,
  state,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
