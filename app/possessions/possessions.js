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
    const { possessions } = this.props;
    if (possessions.personal.items.length < 12) {
      this.setState({ modalVisible: visible });
    }
  }

  addItem(item) {
    this.props.addItem(item);
    this.setModalVisible(false);
  }

  get currentPossessions() {
    const { possessions, removeItem } = this.props;
    return possessions.personal.items.map((item, i) => (
      <RemovableRow
        name={item.name}
        value={formatEffects(item.effects)}
        onRemove={() => removeItem(item, i)}
        key={item.key}
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
  possessions: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  possessions: state.possessions,
});

const mapDispatchToProps = {
  addItem,
  removeItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Possessions);
