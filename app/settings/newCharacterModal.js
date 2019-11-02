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
  TextInput,
} from 'react-native';

import sharedStyles from '../shared/styles';

import {
  PROFESSIONS,
} from '../data';


class NewCharacterModal extends Component {

  constructor(props) {
    super(props);
    this.state = NewCharacterModal.getDefaultState();
  }

  static getDefaultState() {
    return {
      name: '',
      profession: PROFESSIONS[0],
    };
  }

  create() {
    const { create, onRequestClose } = this.props;
    const { name, profession } = this.state;

    create(name, profession);
    this.setState(NewCharacterModal.getDefaultState());
    onRequestClose();
  }

  render() {
    const { visible, onRequestClose } = this.props;
    const { profession } = this.state;

    return (
      <Modal
        visible={visible}
        onRequestClose={onRequestClose}
      >
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          <View style={[sharedStyles.fullSizeCentred, { flex: 0.3, justifyContent: 'space-around' }]}>

            <Text style={sharedStyles.modalHeaderText}>
              New Character
            </Text>

            <TextInput
              placeholder="Name"
              selectionColor="aquamarine"
              onSubmitEditing={(event) => this.setState({ name: event.nativeEvent.text })}
              autoCapitalize="words"
            />

            <Picker
              style={{ width: 200, paddingTop: 10 }}
              selectedValue={profession}
              onValueChange={(p) => this.setState({ profession: p })}
            >
              {professionItems}
            </Picker>

            <Button
              title="Create"
              onPress={() => this.create()}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

NewCharacterModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  create: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

const professionItems = PROFESSIONS.map(p => <Picker.Item label={p} value={p} key={p} />);

export default NewCharacterModal;
