import { combineReducers } from 'redux';

import character from './character/reducer';
import possessions from './possessions/reducer';
import ships from './ships/reducer';
import codewords from './codewords/reducer';
import tickboxes from './tickboxes/reducer';
import settings from './settings/reducer';


export default combineReducers({
  character,
  possessions,
  ships,
  codewords,
  tickboxes,
  settings,
});
