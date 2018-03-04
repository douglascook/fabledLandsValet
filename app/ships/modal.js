import React, {
  Component
} from 'react';

import {
  View,
  Text,
  Picker,
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

  render() {
    const { name, type, crew, cargo, port } = this.props.ship;

    return (
      <Modal {...this.props} >
        <View style={sharedStyles.fullSizeCentred}>

          <Text style={[sharedStyles.modalHeaderText, styles.header]}>
            {name}
          </Text>

          <View style={sharedStyles.containerRow}>
            <Text style={[styles.attribute, sharedStyles.text]}>
              Type
            </Text>
            <Text style={[styles.content, styles.contentText, sharedStyles.text]}>
              {type}
            </Text>
          </View>

          <View style={sharedStyles.containerRow}>
            <Text style={[styles.attribute, sharedStyles.text]}>
              Crew
            </Text>
            <Picker
              style={styles.content}
              selected={crew}
              onValueChange={value => this.updateCrew(value)}
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
            {buildCargoPickers(cargo)}
          </View>

          <View style={sharedStyles.containerRow}>
            <Text style={[styles.attribute, sharedStyles.text]}>
              Docked
            </Text>
            <Text style={[styles.content, styles.contentText, sharedStyles.text]}>
              {port}
            </Text>
          </View>

        </View>
      </Modal>
    );
  }
}

function buildCargoPickers(cargo) {
  return cargo.map((current, i) => (
    <Picker
      style={styles.content}
      selected={current}
      onValueChange={value => null}
      key={i}
    >
      {cargoTypes.map(c =>
        <Item label={c} value={c} key={c} />
      )}
    </Picker>
  ));
}

const styles = StyleSheet.create({
  header: {
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
  },
  contentText: {
    textAlign: 'left',
  },
});
