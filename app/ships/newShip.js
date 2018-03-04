import React, {
  Component
} from 'react';

import PropTypes from 'prop-types';

import {
  View,
  Text,
  Picker,
  TextInput,
  Button,
  Modal,
} from 'react-native';

import sharedStyles from '../shared/styles';

import {
  shipTypes,
  crewQualities,
} from './data';

const Item = Picker.Item;


export default class NewShipModal extends Component {

  constructor(props) {
    super(props);
    this.state = getDefaultState();
  }

  saveNewShip() {
    const { name, type, crew } = this.state;
    this.props.addNewShip(name, type, crew);
    this.closeAndClear();
  }

  closeAndClear() {
    this.setState(getDefaultState());
    this.props.closeModal();
  }

  render() {
    return (
      <Modal
        visible={this.props.visible}
        onRequestClose={() => this.closeAndClear()}
      >
        <View style={sharedStyles.paddedCentred}>

          <Text style={sharedStyles.modalHeaderText}>
            New Ship
          </Text>

          <View style={sharedStyles.containerRow}>
            <TextInput
              style={{ flex: 1 }}
              value={this.state.name}
              placeholder="Name"
              selectionColor="aquamarine"
              autoCapitalize="words"
              onChangeText={text => this.setState({ name: text })}
            />
          </View>

          <View style={sharedStyles.containerRow}>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.state.type}
              onValueChange={value => this.setState({ type: value })}
            >
              {shipTypes.map(s =>
                <Item label={s.type} value={s.type} key={s.type} />
              )}
            </Picker>
          </View>

          <View style={sharedStyles.containerRow}>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.state.crew}
              onValueChange={value => this.setState({ crew: value })}
            >
              {crewQualities.map(q =>
                <Item label={q} value={q} key={q} />
              )}
            </Picker>
          </View>

          <View style={
            { flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}
          >
            <Button
              onPress={() => this.saveNewShip()}
              title="Save"
            />
          </View>

        </View>
      </Modal>
    );
  }
}

const getDefaultState = () => ({
  name: '',
  type: 'Barque',
  crew: 'Poor',
});

NewShipModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  addNewShip: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
