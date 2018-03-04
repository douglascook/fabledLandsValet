import React, {
  Component
} from 'react';

import {
  connect
} from 'react-redux';

import {
  View,
  Text,
  Button,
} from 'react-native';

import {
  SingleItemRow
} from '../shared/components';

import sharedStyles from '../shared/styles';

import {
  addNewShip,
  updatePort,
  updateCrew,
  updateCargo,
} from '../actions';

import ShipModal from './modal';
import NewShipModal from './newShip';


class Ships extends Component {

  constructor(props) {
    super(props);
    this.state = getDefaultState();
  }

  closeModals() {
    this.setState(getDefaultState());
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
            onButtonPress={() => this.setState({ shipIndex: i })}
          />
        ))}

        <View style={
          { flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}
        >
          <Button
            onPress={() => this.setState({ newShip: true })}
            title="Add ship"
          />
        </View>

        { (this.state.shipIndex !== null) &&
          <ShipModal
            ship={this.props.ships[this.state.shipIndex]}
            onRequestClose={() => this.closeModals()}
            visible={this.state.shipIndex !== null}
            onUpdatePort={
              port => this.props.updatePort(this.state.shipIndex, port)}
            onUpdateCrew={
              v => this.props.updateCrew(this.state.shipIndex, v)}
            onUpdateCargo={
              (i, c) => this.props.updateCargo(this.state.shipIndex, i, c)}
          />
        }

        <NewShipModal
          visible={this.state.newShip}
          addNewShip={(n, t, c) => this.props.addNewShip(n, t, c)}
          closeModal={() => this.closeModals()}
        />

      </View>
    );
  }
}

const getDefaultState = () => ({
  shipIndex: null,
  newShip: false,
});

const mapStateToProps = state => ({
  ships: state.ships,
});

const mapDispatchToProps = dispatch => ({
  addNewShip: (name, type, crew) => dispatch(addNewShip(name, type, crew)),
  updatePort: (shipIndex, port) => dispatch(updatePort(shipIndex, port)),
  updateCrew: (shipIndex, quality) => dispatch(updateCrew(shipIndex, quality)),
  updateCargo: (shipIndex, cargoIndex, cargo) =>
    dispatch(updateCargo(shipIndex, cargoIndex, cargo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ships);
