import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
} from 'react-native';


export default class SkillChangeModal extends Component {

  decrement() {
    this.props.updateValue(this.props.skill.value - 1);
  }

  increment() {
    this.props.updateValue(this.props.skill.value + 1);
  }

  render() {
    return (
      <Modal {...this.props} >
        <View style={styles.modal}>

          <Text style={styles.skillName}>
            {this.props.skill ? this.props.skill.attribute : ''}
          </Text>

          <View style={styles.changer}>
            <Button
              title="-"
              onPress={() => this.decrement()}
            />

            <Text style={styles.value}>
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
