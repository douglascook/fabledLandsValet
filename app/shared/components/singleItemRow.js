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
      <Text style={styles.textTitle}>
        {name}
      </Text>
    </View>

    <View style={{ flex: onButtonPress ? 5 : 6 }}>
      <Text style={sharedStyles.text}>
        {value}
      </Text>
    </View>

    {onButtonPress &&
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={onButtonPress}
      >
        <Text style={styles.buttonText}>
          o
        </Text>
      </TouchableOpacity>
    }

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
  },
  textTitle: {
    backgroundColor: 'whitesmoke',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 1,
  },
  button: {
    width: 25,
    backgroundColor: 'dodgerblue',
    marginLeft: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SingleItemRow;
