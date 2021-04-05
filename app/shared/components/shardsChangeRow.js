import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import sharedStyles from '../styles';


export default class ShardsChangeRow extends Component {

  constructor(props) {
    super(props);
    this.state = getDefaultState();
  }

  onUpdateDifference(event) {
    if (event.nativeEvent.text) {
      this.setState({
        modifier: parseInt(event.nativeEvent.text, 10),
        buttonsDisabled: false,
      });
    }
  }

  render() {
    const { updateAmount, leftButtonIcon, rightButtonIcon } = this.props;
    const { buttonsDisabled, modifier } = this.state;

    return (
      <View style={styles.diffRow}>
        <IconButton
          iconName={leftButtonIcon}
          onPress={() => updateAmount(-modifier)}
          disabled={buttonsDisabled}
        />

        <View style={styles.diffBox}>
          <TextInput
            placeholder="0"
            style={[sharedStyles.modalHeaderText, styles.modifier]}
            keyboardType="numeric"
            autoCorrect={false}
            selectionColor="aquamarine"
            onFocus={() => this.setState({ buttonsDisabled: true })}
            onSubmitEditing={(e) => this.onUpdateDifference(e)}
          />
        </View>

        <IconButton
          iconName={rightButtonIcon}
          onPress={() => updateAmount(modifier)}
          disabled={buttonsDisabled}
        />

      </View>
    );
  }
}

ShardsChangeRow.propTypes = {
  updateAmount: PropTypes.func.isRequired,
  leftButtonIcon: PropTypes.string.isRequired,
  rightButtonIcon: PropTypes.string.isRequired,
};

const IconButton = ({ iconName, disabled, onPress }) => (
  <TouchableOpacity
    style={[sharedStyles.addButton, styles.button, {
      backgroundColor: disabled ? 'whitesmoke' : 'dodgerblue' }]}
    activeOpacity={0.6}
    onPress={onPress}
    disabled={disabled}
  >
    <MatIcon
      name={iconName}
      style={styles.buttonIcon}
    />
  </TouchableOpacity>
);

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

const getDefaultState = () => ({
  buttonsDisabled: true,
  modifier: undefined,
});

const styles = StyleSheet.create({
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
    justifyContent: 'center',
  },
  buttonIcon: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  }
});
