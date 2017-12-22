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


export default class ShardsChangeModal extends Component {

  constructor() {
    super();
    this.state = getDefaultState();
  }

  onUpdateDifference(event) {
    if (event.nativeEvent.text) {
      this.setState({
        difference: parseInt(event.nativeEvent.text),
        buttonsDisabled: false,
      });
    }
  }

  onClose() {
    this.setState(getDefaultState());
    this.props.onRequestClose();
  }

  decrement() {
    this.props.updateAmount(this.props.amount - this.state.difference);
  }

  increment() {
    this.props.updateAmount(this.props.amount + this.state.difference);
  }

  render() {
    return (
      <Modal
        visible={this.props.visible}
        onRequestClose={() => this.onClose()}
      >
        <View style={styles.modal}>
          <Text style={styles.skillName}>
            Shards
          </Text>

          <Text style={styles.currentAmount}>
            Current: {this.props.amount}
          </Text>

          <View style={styles.diffRow}>
            <View style={styles.button}>
              <Button
                title="-"
                onPress={() => this.decrement()}
                disabled={this.state.buttonsDisabled}
              />
            </View>

            <View style={styles.diffBox}>
              <TextInput
                style={styles.difference}
                keyboardType={'numeric'}
                autoCorrect={false}
                selectionColor="aquamarine"
                onFocus={() => this.setState({ buttonsDisabled: true })}
                onSubmitEditing={e => this.onUpdateDifference(e)}
              />
            </View>

            <View style={styles.button}>
              <Button
                title="+"
                onPress={() => this.increment()}
                disabled={this.state.buttonsDisabled}
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
  difference: undefined,
});

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skillName: {
    fontWeight: 'bold',
    fontSize: 25,
  },
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
  difference: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'column',
  }
});
