import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Button,
} from 'react-native';

import {
  connect
} from 'react-redux';

import AddItemModal from './addItemModal';

import {
  RemovableRow
} from '../shared/components';

import {
  formatEffects
} from '../shared/helpers';

import styles from '../shared/styles';

import {
  addItem,
  removeItem,
} from '../actions';


class Possessions extends Component {
  constructor() {
    super();
    this.state = { modalVisible: false };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  addItem(item) {
    this.props.addItem(item);
    this.setModalVisible(false);
  }

  removeItem(key) {
    this.props.removeItem(key);
  }

  get currentPossessions() {
    return this.props.possessions.map((item, i) => (
      <RemovableRow
        name={item.name}
        value={formatEffects(item.effects)}
        onRemove={() => this.props.removeItem(item, i)}
        key={item.name}
      />
    ));
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.headerText}>
          Possessions
        </Text>

        <View style={{ marginVertical: 10 }}>
          {this.currentPossessions}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button
            onPress={() => this.setModalVisible(true)}
            title="Add item"
          />
        </View>

        <AddItemModal
          visible={this.state.modalVisible}
          closeModal={() => this.setModalVisible(false)}
          addItem={state => this.addItem(state)}
        />

      </View>
    );
  }
}

Possessions.propTypes = {
  possessions: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  possessions: state.possessions,
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: (item, index) => dispatch(removeItem(item, index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Possessions);
