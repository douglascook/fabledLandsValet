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

  dumpStateToFile() {
    const { characterName, state } = this.props;
    const path = `${this.savesDir}/${characterName}`;
    const currentState = JSON.stringify(state);
    RNFS.writeFile(path, currentState, 'utf8')
      .catch((err) => this.setState({ errors: err }));
  }

  createCharacter(name, profession) {
    // save the current character first
    this.dumpStateToFile();
    this.props.createNewCharacter(name, profession);
    this.props.navigation.navigate('character');
  }

  openLoadCharacterModal() {
    RNFS.readDir(this.savesDir)
      .then((result) => result.map((f) => f.path))
      .then((paths) => this.setState({ saveFiles: paths }));
    this.setState({ loadCharacterVisible: true });
  }

  loadSave(filepath) {
    // save the current character first
    this.dumpStateToFile();

    const { loadSave, navigation } = this.props;
    RNFS.readFile(filepath)
      .then((content) => loadSave(JSON.parse(content)))
      .then(() => this.setState({ loadCharacterVisible: false }))
      .then(() => navigation.navigate('character'));
  }

  render() {
    const { saveFiles, newCharacterVisible, loadCharacterVisible } = this.state;

    return (
      <View style={sharedStyles.container}>

        <Text style={sharedStyles.headerText}>
          Settings
        </Text>

        <View style={{flex: 1, justifyContent: 'space-around'}}>
          <View style={[sharedStyles.paddedCentred, { flex: 0.4, justifyContent: 'space-around' }]}>

            <Button
              title="New Character"
              onPress={() => this.setState({ newCharacterVisible: true })}
            />

            <Button
              title="Save to file"
              onPress={() => this.dumpStateToFile()}
            />

            <Button
              title="Load save"
              onPress={() => this.openLoadCharacterModal()}
            />

            <NewCharacterModal
              visible={newCharacterVisible}
              create={(name, profession) => this.createCharacter(name, profession)}
              onRequestClose={() => this.setState({ newCharacterVisible: false })}
            />

            <LoadCharacterModal
              visible={loadCharacterVisible}
              filepaths={saveFiles}
              loadSave={(f) => this.loadSave(f)}
              onRequestClose={() => this.setState({ loadCharacterVisible: false })}
            />
          </View>
        </View>

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
