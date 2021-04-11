import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native';

import { CommunityIconButton } from './iconButton';
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
        <CommunityIconButton
          iconName={leftButtonIcon}
          buttonColour="dodgerblue"
          onPress={() => updateAmount(-modifier)}
          disabled={buttonsDisabled}
        />

        <View style={styles.diffBox}>
          <TextInput
            placeholder="0"
            style={[sharedStyles.modalHeaderText, styles.modifier]}
            keyboardType="numeric"
            selectionColor="aquamarine"
            onFocus={() => this.setState({ buttonsDisabled: true })}
            onSubmitEditing={(e) => this.onUpdateDifference(e)}
          />
        </View>

        <CommunityIconButton
          iconName={rightButtonIcon}
          buttonColour="dodgerblue"
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
});
