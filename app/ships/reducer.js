import {
  UPDATE_PORT,
  UPDATE_CREW,
  UPDATE_CARGO,
} from '../actions';

import { initialState } from '../reducer';


export default function ships(state = initialState.ships, action) {

  switch (action.type) {

    case UPDATE_PORT: {
      const newState = [...state];
      newState[action.shipIndex].port = action.port;
      return newState;
    }

    case UPDATE_CREW: {
      const newState = [...state];
      newState[action.shipIndex].crew = action.quality;
      return newState;
    }

    case UPDATE_CARGO: {
      const newState = [...state];
      newState[action.shipIndex].cargo[action.cargoIndex] = action.cargo;
      return newState;
    }

    default:
      return state;
  }
}
