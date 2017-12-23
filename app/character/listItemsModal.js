import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';

import {
  ScrollView,
  Text,
  TextInput,
  Modal,
  StyleSheet,
} from 'react-native';

import sharedStyles from '../shared/styles';


export default class ListItemsModal extends Component {

  onSubmitEditing(event) {
    this.props.addNew(event.nativeEvent.text);
    this.textInput.clear();
  }

  render() {
    const { visible, onRequestClose, items, remove } = this.props;
    return (
      <Modal
        visible={visible}
        onRequestClose={onRequestClose}
        style={styles.container}
      >

        <Text style={styles.skillName}>
          {items.attribute}
        </Text>

        <ScrollView contentContainerStyle={styles.content}>
          <TextInput
            placeholder="New"
            selectionColor="aquamarine"
            onSubmitEditing={e => this.onSubmitEditing(e)}
            autoCapitalize="sentences"
            ref={input => { this.textInput = input; }}
          />

          { items.value.map(i => (
            <Text style={sharedStyles.text} key={i}>
              {i}
            </Text>))
          }
        </ScrollView>

      </Modal>
    );
  }
}

ListItemsModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  items: PropTypes.object,
  addNew: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 110,
  },
  skillName: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 10,
  },
});
