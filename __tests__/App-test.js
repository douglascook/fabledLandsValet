/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// https://github.com/facebook/jest/issues/4359
jest.useFakeTimers();

it('renders correctly', () => {
  renderer.create(<App />);
});
