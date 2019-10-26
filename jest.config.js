module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-vector-icons|react-navigation-tabs|react-native-screens|@react-navigation|react-native-safe-area-view|@react-native-community)/)'
  ],
  // timers and test env config needed due to https://github.com/facebook/jest/issues/4359
  timers: 'fake',
  testEnvironment: 'jsdom'
};
