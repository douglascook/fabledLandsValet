import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    backgroundColor: 'steelblue',
    textAlign: 'center',
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  navRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  rowName: {
    flexDirection: 'row',
    flex: 1,
  },
  rowValue: {
    flexDirection: 'row',
    flex: 2,
  },
  text: {
    backgroundColor: 'whitesmoke',
    fontSize: 18,
  },
});

export default styles;
