import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';

import sharedStyles from '../../shared/styles';


export default class ShardsChangeModal extends Component {

  constructor() {
    super();
    this.state = getDefaultState();
  }

  onUpdateDifference(event) {
    if (event.nativeEvent.text) {
      this.setState({
        modifier: parseInt(event.nativeEvent.text),
        buttonsDisabled: false,
      });
    }
  }

  onClose() {
    this.setState(getDefaultState());
    this.props.onRequestClose();
  }

  render() {
    const { visible, amount, updateAmount } = this.props;
    const { buttonsDisabled, modifier } = this.state;

    return (
      <Modal
        visible={visible}
        onRequestClose={() => this.onClose()}
      >
        <View style={sharedStyles.fullSizeCentred}>
          <Text style={sharedStyles.modalHeaderText}>
            Shards
          </Text>

          <Text style={styles.currentAmount}>
            Current: {amount}
          </Text>

          <View style={styles.diffRow}>
            <View style={styles.button}>
              <Button
                title="-"
                onPress={() => updateAmount(-modifier)}
                disabled={buttonsDisabled}
              />
            </View>

            <View style={styles.diffBox}>
              <TextInput
                style={[sharedStyles.modalHeaderText, styles.modifier]}
                keyboardType="numeric"
                autoCorrect={false}
                selectionColor="aquamarine"
                onFocus={() => this.setState({ buttonsDisabled: true })}
                onSubmitEditing={e => this.onUpdateDifference(e)}
              />
            </View>

            <View style={styles.button}>
              <Button
                title="+"
                onPress={() => updateAmount(modifier)}
                disabled={buttonsDisabled}
              />
            </View>
          </View>

        </View>
      </Modal>
    );
  }
}

ShardsChangeModal.propTypes = {
  amount: PropTypes.number.isRequired,
  updateAmount: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

const getDefaultState = () => ({
  buttonsDisabled: true,
  modifier: undefined,
});

const styles = StyleSheet.create({
  currentAmount: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  diffRow: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 80,
  },
  diffBox: {
    flex: 3,
    flexDirection: 'column',
    paddingHorizontal: 30,
  },
  modifier: {
    textAlign: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'column',
  }
});
