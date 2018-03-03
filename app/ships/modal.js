import React, {
  Component
} from 'react';

import {
  Text,
  View,
  Modal,
  StyleSheet,
} from 'react-native';

import sharedStyles from '../shared/styles';


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
            <Text style={[styles.content, sharedStyles.text]}>
              {type}
            </Text>
          </View>

          <View style={sharedStyles.containerRow}>
            <Text style={[styles.attribute, sharedStyles.text]}>
              Crew
            </Text>
            <Text style={[styles.content, sharedStyles.text]}>
              {crew}
            </Text>
          </View>

          <View style={sharedStyles.containerRow}>
            <Text style={[styles.attribute, sharedStyles.text]}>
              Cargo
            </Text>
            <Text style={[styles.content, sharedStyles.text]}>
              {cargo.join(', ')}
            </Text>
          </View>

          <View style={sharedStyles.containerRow}>
            <Text style={[styles.attribute, sharedStyles.text]}>
              Docked
            </Text>
            <Text style={[styles.content, sharedStyles.text]}>
              {port}
            </Text>
          </View>

        </View>
      </Modal>
    );
  }
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
    textAlign: 'left',
  },
});
