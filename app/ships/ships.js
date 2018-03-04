import React, {
  Component
} from 'react';

import {
  connect
} from 'react-redux';

import {
  Text,
  View,
} from 'react-native';

import {
  SingleItemRow
} from '../shared/components';

import sharedStyles from '../shared/styles';

import {
  updatePort,
  updateCrew,
  updateCargo,
} from '../actions';

import ShipModal from './modal';


class Ships extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shipIndex: null,
    };
  }

  showModal(index) {
    this.setState({
      shipIndex: index,
    });
  }

  closeModal() {
    this.setState({
      shipIndex: null,
    });
  }

  render() {
    return (
      <View style={sharedStyles.container}>

        <Text style={sharedStyles.headerText}>
          Ships
        </Text>

        { this.props.ships.map((ship, i) => (
          <SingleItemRow
            name={ship.name}
            value={ship.port}
            key={ship.name}
            onButtonPress={() => this.showModal(i)}
          />
        ))}

        { (this.state.shipIndex !== null) &&
          <ShipModal
            ship={this.props.ships[this.state.shipIndex]}
            onRequestClose={() => this.closeModal()}
            visible={this.state.shipIndex !== null}
            onUpdatePort={
              port => this.props.updatePort(this.state.shipIndex, port)}
            onUpdateCrew={
              v => this.props.updateCrew(this.state.shipIndex, v)}
            onUpdateCargo={
              (i, c) => this.props.updateCargo(this.state.shipIndex, i, c)}
          />
        }

      </View>
    );
  }
}

const mapStateToProps = state => ({
  ships: state.ships,
});

const mapDispatchToProps = dispatch => ({
  updatePort: (shipIndex, port) => dispatch(updatePort(shipIndex, port)),
  updateCrew: (shipIndex, quality) => dispatch(updateCrew(shipIndex, quality)),
  updateCargo: (shipIndex, cargoIndex, cargo) =>
    dispatch(updateCargo(shipIndex, cargoIndex, cargo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ships);
