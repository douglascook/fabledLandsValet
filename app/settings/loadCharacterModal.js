import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Picker,
  Modal,
  Button,
} from 'react-native';

import sharedStyles from '../shared/styles';


class LoadCharacterModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: props.filepaths[0]
    };
  }

  getFilepaths() {
    const { filepaths } = this.props;
    return filepaths.map(
      (f) => <Picker.Item label={f.split('/').reverse()[0]} value={f} key={f} />
    );
  }

  render() {
    const { visible, onRequestClose, loadSave } = this.props;
    const { selectedFile } = this.state;

    return (
      <Modal
        visible={visible}
        onRequestClose={onRequestClose}
      >
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          <View style={[sharedStyles.fullSizeCentred, { flex: 0.4, justifyContent: 'space-around' }]}>

            <Text style={sharedStyles.modalHeaderText}>
              Load Character
            </Text>

            <Picker
              selectedValue={selectedFile}
              style={{ width: 200, paddingTop: 10 }}
              onValueChange={(f) => this.setState({ selectedFile: f })}
            >
              {this.getFilepaths()}
            </Picker>

            <Button
              title="Load"
              onPress={() => loadSave(selectedFile)}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

LoadCharacterModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  filepaths: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadSave: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default LoadCharacterModal;
