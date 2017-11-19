import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
} from 'react-native';

import {
  SubmitButtonRow
} from '../shared/components';


export default class SkillChangeModal extends Component {

  constructor() {
    super();
    this.state = {
      value: undefined,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.skillValue,
    });
  }

  decrement() {
    this.setState({
      value: this.state.value - 1,
    });
  }

  increment() {
    this.setState({
      value: this.state.value + 1,
    });
  }

  render() {
    return (
      <Modal {...this.props} >
        <View style={styles.modal}>
          <Text style={styles.skillName}>
            {this.props.skillName}
          </Text>

          <View style={styles.changer}>
            <Button
              title="-"
              onPress={() => this.decrement()}
            />

            <Text style={styles.value}>
              {this.state.value}
            </Text>

            <Button
              title="+"
              onPress={() => this.increment()}
            />
          </View>

          <SubmitButtonRow
            title="done"
            onPress={() => this.props.onDone(this.state.value)}
          />
        </View>
      </Modal>
    );
  }
}

SkillChangeModal.propTypes = {
  // TODO update to allow null and to be required, no simple way?
  skillValue: PropTypes.number,
  skillName: PropTypes.string,
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
});
