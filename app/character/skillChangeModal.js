import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
} from 'react-native';

import sharedStyles from '../shared/styles';


export default class SkillChangeModal extends Component {

  decrement() {
    if (this.props.skill.value > 1) {
      this.props.updateValue(this.props.skill.value - 1);
    }
  }

  increment() {
    if (this.props.skill.value < 12) {
      this.props.updateValue(this.props.skill.value + 1);
    }
  }

  render() {
    return (
      <Modal {...this.props} >
        <View style={sharedStyles.fullSizeCentred}>

          <Text style={sharedStyles.modalHeaderText}>
            {this.props.skill ? this.props.skill.attribute : ''}
          </Text>

          <View style={styles.changer}>
            <Button
              title="-"
              onPress={() => this.decrement()}
            />

            <Text style={[sharedStyles.modalHeaderText, styles.value]}>
              {this.props.skill ? this.props.skill.value : 0}
            </Text>

            <Button
              title="+"
              onPress={() => this.increment()}
            />
          </View>

        </View>
      </Modal>
    );
  }
}

SkillChangeModal.propTypes = {
  // TODO update to allow null and to be required, no simple way?
  skill: PropTypes.object,
  updateValue: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
  changer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 30,
  },
  value: {
    paddingHorizontal: 25,
  },
});
