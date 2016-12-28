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
    marginLeft: 3,
    marginRight: 3,
    marginTop: 1,
    marginBottom: 1,
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
    flex: 1,
    marginRight: 5,
  },
  rowValue: {
    flex: 2,
  },
  remRowItem: {
    flex: 5,
    marginRight: 5,
  },
  remRowButton: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    backgroundColor: 'whitesmoke',
    fontSize: 18,
    paddingLeft: 2,
    paddingRight: 2,
  },
  textTitle: {
    backgroundColor: 'whitesmoke',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
