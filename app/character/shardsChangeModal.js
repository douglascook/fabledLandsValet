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
    this.state = {
      currentAmount: undefined,
      difference: 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentAmount: nextProps.shards.value,
    });
  }

  onUpdateDifference(event) {
    this.setState({
      difference: parseInt(event.nativeEvent.text),
    });
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
      <Modal {...this.props} >
        <View style={styles.modal}>
          <Text style={styles.skillName}>
            Shards
          </Text>

          <Text style={styles.value}>
            Current: {this.state.currentAmount}
          </Text>

          <View style={styles.changer}>
            <Button
              title="-"
              onPress={() => this.decrement()}
            />

            <TextInput
              style={styles.difference}
              keyboardType={'phone-pad'}
              onSubmitEditing={e => this.onUpdateDifference(e)}
            />

            <Button
              title="+"
              onPress={() => this.increment()}
            />
          </View>

          <SubmitButtonRow
            title="done"
            onPress={() => this.props.onDone(this.state.currentAmount)}
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
};


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
  changer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 30,
  },
  value: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingHorizontal: 25,
  },

  differenceRow: {
    flexDirection: 'row',
  },
  difference: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingHorizontal: 60,
  },
});
