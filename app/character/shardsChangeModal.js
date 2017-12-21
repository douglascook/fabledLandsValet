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

import {
  SubmitButtonRow
} from '../shared/components';


export default class ShardsChangeModal extends Component {

  constructor() {
    super();
    this.state = getDefaultState();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentAmount: nextProps.shards.value,
    });
  }

  onUpdateDifference(event) {
    if (event.nativeEvent.text) {
      this.setState({
        difference: parseInt(event.nativeEvent.text),
        buttonsDisabled: false,
      });
    }
  }

  onDone() {
    this.props.onDone(this.state.currentAmount);
    this.onClose();
  }

  onClose() {
    this.setState(getDefaultState());
    this.props.onRequestClose();
  }

  decrement() {
    this.setState({
      currentAmount: this.state.currentAmount - this.state.difference
    });
  }

  increment() {
    this.setState({
      currentAmount: this.state.currentAmount + this.state.difference
    });
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
            Current: {this.state.currentAmount}
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

          <SubmitButtonRow
            title="done"
            onPress={() => this.onDone()}
            disabled={this.state.buttonsDisabled}
          />
        </View>
      </Modal>
    );
  }
}

ShardsChangeModal.propTypes = {
  // TODO update to allow null and to be required, no simple way?
  shards: PropTypes.object.isRequired,
  difference: PropTypes.number,
  onDone: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

const getDefaultState = () => ({
  buttonsDisabled: true,
  currentAmount: undefined,
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
