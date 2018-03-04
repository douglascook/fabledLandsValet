import React, {
  Component
} from 'react';

import {
  View,
  Text,
  Picker,
  TextInput,
  Modal,
  StyleSheet,
} from 'react-native';

import sharedStyles from '../shared/styles';

import {
  shipTypes,
  cargoTypes,
  crewQualities
} from './data';

const Item = Picker.Item;


export default class ShipModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      port: props.ship.port,
    };
  }

  render() {
    const { name, type, crew, cargo, port } = this.props.ship;

    return (
      <Modal {...this.props} >
        <View style={sharedStyles.fullSizeCentred}>

          <Text style={sharedStyles.modalHeaderText}>
            {name}
          </Text>

          <Text style={styles.shipType}>
            {type}
          </Text>

          <View style={sharedStyles.containerRow}>
            <Text style={[styles.attribute, sharedStyles.text]}>
              Docked
            </Text>
            <TextInput
              style={[styles.content, styles.portInput]}
              value={this.state.port}
              selectionColor="aquamarine"
              underlineColorAndroid="transparent"
              autoCapitalize="sentences"
              onChangeText={text => this.setState({ port: text })}
              onSubmitEditing={e => this.props.onUpdatePort(e.nativeEvent.text)}
            />
          </View>

          <View style={sharedStyles.containerRow}>
            <Text style={[styles.attribute, sharedStyles.text]}>
              Crew
            </Text>
            <Picker
              style={styles.content}
              selectedValue={crew}
              onValueChange={value => this.props.onUpdateCrew(value)}
              itemStyle={styles.portInput}
            >
              {crewQualities.map(q =>
                <Item label={q} value={q} key={q} />
              )}
            </Picker>
          </View>

          <View style={sharedStyles.containerRow}>
            <Text style={[styles.attribute, sharedStyles.text]}>
              Cargo
            </Text>
          </View>

          <View style={sharedStyles.containerRow}>
            {buildCargoPickers(cargo, (i, c) => this.props.onUpdateCargo(i, c))}
          </View>

        </View>
      </Modal>
    );
  }
}

function buildCargoPickers(cargo, onUpdateCargo) {
  return cargo.map((current, i) => (
    <Picker
      style={styles.content}
      selectedValue={current}
      onValueChange={value => onUpdateCargo(i, value)}
      key={i}
    >
      {cargoPickerItems}
    </Picker>
  ));
}

const cargoPickerItems = cargoTypes.map(c =>
  <Item label={c} value={c} key={c} />
);

const styles = StyleSheet.create({
  header: {
    paddingBottom: 10,
  },
  shipType: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: 10,
  },
  attribute: {
    flex: 1,
    textAlign: 'left',
    fontWeight: 'bold',
    marginRight: 2,
  },
  content: {
    flex: 4,
    paddingLeft: 8,
  },
  portInput: {
    fontSize: 16,
  },
});
