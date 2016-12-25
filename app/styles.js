import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    backgroundColor: 'lightseagreen',
    textAlign: 'center',
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 1,
  },
  navRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  navText: {
    textAlign: 'center',
    fontSize: 16,
  },
  rowName: {
    flexDirection: 'row',
    flex: 1,
  },
  rowValue: {
    flexDirection: 'row',
    flex: 2,
  },
  remRowItem: {
    flexDirection: 'row',
    flex: 5,
  },
  remRowButton: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'firebrick',
  },
  text: {
    backgroundColor: 'whitesmoke',
    fontSize: 18,
  },
});

export default styles;
