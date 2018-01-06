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

import {
  AddRemoveItem
} from '../shared/components';


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
        style={sharedStyles.fullSizeCentred}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={[sharedStyles.modalHeaderText, styles.skillName]}>
            {items.attribute}
          </Text>

          <TextInput
            placeholder="New"
            selectionColor="aquamarine"
            onSubmitEditing={e => this.onSubmitEditing(e)}
            autoCapitalize="sentences"
            ref={(input) => { this.textInput = input; }}
          />

          { items.value.map((item, i) => (
            <AddRemoveItem
              text={item}
              onRemove={() => remove(i)}
              isActive
              key={item}
            />))
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
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
  skillName: {
    textAlign: 'center',
    paddingBottom: 10,
  },
});
