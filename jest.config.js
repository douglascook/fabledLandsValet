module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-vector-icons|react-navigation-tabs|react-native-screens|@react-navigation|react-native-safe-area-view)/)'
  ]
};
