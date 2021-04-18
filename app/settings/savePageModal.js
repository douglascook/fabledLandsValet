import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Picker,
  Modal,
  Button,
  TextInput,
} from 'react-native';

import sharedStyles from '../shared/styles';

import {
  BOOKS,
} from '../data';


class SavePageModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: props.currentBook,
      page: null,
    };
  }

  updatePage() {
    const { book, page } = this.state;
    const { onRequestClose } = this.props;
    if (page !== null) {
      onRequestClose(book, page);
    }
  }

  render() {
    const { visible } = this.props;
    const { book, page } = this.state;

    return (
      <Modal
        visible={visible}
        onRequestClose={(b, p) => this.updatePage(b, p)}
      >
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          <View style={sharedStyles.modalContent}>

            <Text style={sharedStyles.modalHeaderText}>
              Save Page
            </Text>

            <View style={{ flexDirection: 'row' }}>
              <Picker
                style={{ flex: 0.71 }}
                selectedValue={book}
                onValueChange={(v) => this.setState({ book: v })}
              >
                {bookItems}
              </Picker>
            </View>

            <TextInput
              style={{ textAlign: 'center' }}
              placeholder="Page Number"
              keyboardType="numeric"
              selectionColor="aquamarine"
              onSubmitEditing={(e) => this.setState({ page: e.nativeEvent.text })}
            />

            <Button
              title="Save"
              onPress={(b, p) => this.updatePage(b, p)}
              disabled={page === null}
            />
          </View>

        </View>
      </Modal>
    );
  }
}

const bookItems = BOOKS.map((b) => (
  <Picker.Item label={b} value={b} key={b} />
));

SavePageModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  currentBook: PropTypes.string.isRequired,
};

export default SavePageModal;
