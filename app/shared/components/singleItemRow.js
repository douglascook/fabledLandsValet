import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import sharedStyles from '../styles';


const SingleItemRow = ({ name, value, onButtonPress = null }) => (
  <View style={sharedStyles.containerRow}>

    <View style={styles.rowName}>
      <Text style={[sharedStyles.text, styles.textTitle]}>
        {name}
      </Text>
    </View>

    <View style={styles.rowContents}>
      <Text style={[sharedStyles.text, styles.text]}>
        {value}
      </Text>

      {onButtonPress &&
        <TouchableOpacity
          style={[sharedStyles.addButton, styles.button]}
          activeOpacity={0.6}
          onPress={onButtonPress}
        >
          <Text style={sharedStyles.buttonText}>
            o
          </Text>
        </TouchableOpacity>
      }
    </View>


  </View>
);

SingleItemRow.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onButtonPress: PropTypes.func,
};

const styles = StyleSheet.create({
  rowName: {
    flex: 6,
    marginRight: 5,
    backgroundColor: 'whitesmoke'
  },
  rowContents: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'whitesmoke'
  },
  text: {
    paddingHorizontal: 2,
  },
  textTitle: {
    fontWeight: 'bold',
    paddingLeft: 1,
  },
  button: {
    marginLeft: 5,
  },
});

export default SingleItemRow;
