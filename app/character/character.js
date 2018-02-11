import React, {
  Component
} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  connect
} from 'react-redux';

import PropTypes from 'prop-types';

import SkillChangeModal from './skillChangeModal';
import ShardsChangeModal from './shardsChangeModal';
import GodSelectModal from './godSelectModal';
import ListItemsModal from './listItemsModal';

import {
  SingleItemRow
} from '../shared/components';

import sharedStyles from '../shared/styles';

import {
  addSignPrefix
} from '../shared/helpers';

import {
  updateSkillValue,
  addAsset,
  removeAsset,
} from '../actions';


export const stats = ['rank', 'defence', 'stamina', 'charisma', 'combat',
  'magic', 'sanctity', 'scouting', 'thievery'];

const assets = ['titles', 'blessings', 'resurrection'];


class Character extends Component {

  constructor() {
    super();
    this.state = getDefaultState();
  }

  showSkillModal(attributeKey) {
    this.setState({
      skillModalVisible: true,
      skillToChange: attributeKey,
    });
  }

  onCloseModal() {
    this.setState(getDefaultState());
  }

  renderSkillRows() {
    return stats.map(key => {
      const attribute = this.props.character[key];
      return (
        <SingleItemRow
          name={attribute.attribute}
          value={getDisplayValue(attribute)}
          onButtonPress={() => this.showSkillModal(key)}
          key={key}
        />
      );
    });
  }

  renderAssetsButtons() {
    return assets.map(key => (
      <TouchableOpacity
        style={styles.buttonRow}
        key={key}
        onPress={() => this.setState({ [`${key}ModalVisible`]: true })}
      >
        <Text style={[sharedStyles.text, styles.statButton]}>
          {this.props.character[key].attribute}
        </Text>
      </TouchableOpacity>
    ));
  }

  renderAssetsModals() {
    return assets.map(key => (
      <ListItemsModal
        visible={this.state[`${key}ModalVisible`]}
        onRequestClose={() => this.onCloseModal()}
        items={this.props.character[key]}
        addNew={i => this.props.addAsset(key, i)}
        remove={i => this.props.removeAsset(key, i)}
        key={key}
      />
    ));
  }

  render() {
    return (
      <View style={sharedStyles.container}>

        <Text style={sharedStyles.headerText}>
          Character
        </Text>
        <Text style={styles.nameProfession}>
          {this.props.character.name.value}
        </Text>
        <Text style={styles.nameProfession}>
          {this.props.character.profession.value}
        </Text>

        <View style={{ marginVertical: 6 }}>
          {this.renderSkillRows()}
          <SingleItemRow
            name="Shards"
            value={getDisplayValue(this.props.character.shards)}
            onButtonPress={() => this.setState({ shardsModalVisible: true })}
          />
          <SingleItemRow
            name="God"
            value={this.props.character.god.value}
            onButtonPress={() => this.setState({ godModalVisible: true })}
          />
        </View>

        {this.renderAssetsButtons()}
        {this.renderAssetsModals()}

        <SkillChangeModal
          visible={this.state.skillModalVisible}
          skill={this.props.character[this.state.skillToChange]}
          onDone={v => this.onSubmitSkillChange(v)}
          updateValue={
            s => this.props.updateSkillValue(this.state.skillToChange, s)}
          onRequestClose={() => this.onCloseModal()}
        />
        <ShardsChangeModal
          visible={this.state.shardsModalVisible}
          amount={this.props.character.shards.value}
          onDone={s => this.onSubmitShardsChange(s)}
          updateAmount={s => this.props.updateSkillValue('shards', s)}
          onRequestClose={() => this.onCloseModal()}
        />
        <GodSelectModal
          visible={this.state.godModalVisible}
          selected={this.props.character.god.value}
          updateSelected={g => this.props.updateSkillValue('god', g)}
          onRequestClose={() => this.onCloseModal()}
        />

      </View>
    );
  }
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
  updateSkillValue: PropTypes.func.isRequired,
  addAsset: PropTypes.func.isRequired,
  removeAsset: PropTypes.func.isRequired,
};

function getDisplayValue(attr) {
  if (!attr.modifier) {
    return attr.value;
  }
  return `${attr.value + attr.modifier} (${addSignPrefix(attr.modifier)})`;
}

const getDefaultState = () => ({
  skillModalVisible: false,
  shardsModalVisible: false,
  godModalVisible: false,
  titlesModalVisible: false,
  blessingsModalVisible: false,
  resurrectionModalVisible: false,
  skillToChange: null,
});

const mapStateToProps = state => ({
  character: state.character
});

const mapDispatchToProps = dispatch => ({
  updateSkillValue: (attr, value) => dispatch(updateSkillValue(attr, value)),
  addAsset: (attr, item) => dispatch(addAsset(attr, item)),
  removeAsset: (attr, index) => dispatch(removeAsset(attr, index)),
});

const styles = StyleSheet.create({
  nameProfession: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 1,
  },
  statButton: {
    fontWeight: 'bold',
    textAlign: 'center',
    width: 260,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Character);
