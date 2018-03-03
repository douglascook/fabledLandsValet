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

import ShipModal from './modal';


class Ships extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentShip: null,
    };
  }

  showModal(ship) {
    this.setState({
      currentShip: ship,
    });
  }

  closeModal() {
    this.setState({
      currentShip: null,
    });
  }

  render() {
    return (
      <View style={sharedStyles.container}>

        <Text style={sharedStyles.headerText}>
          Ships
        </Text>

        { this.props.ships.map(ship => (
          <SingleItemRow
            name={ship.name}
            value={ship.port}
            key={ship.name}
            onButtonPress={() => this.showModal(ship)}
          />
        ))}

        { this.state.currentShip &&
          <ShipModal
            ship={this.state.currentShip}
            onRequestClose={() => this.closeModal()}
          />
        }

      </View>
    );
  }
}

const mapStateToProps = state => ({
  ships: state.ships,
});

export default connect(
  mapStateToProps,
)(Ships);
