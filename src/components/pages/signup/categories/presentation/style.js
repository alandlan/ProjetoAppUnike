import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  form: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center'
  },
  label: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  info: {
    fontSize: 16,
    textAlign: 'center'
  },
  checkbox: {
    justifyContent: 'center'
  },
  button: {
    fontSize: 28,
    fontWeight: '400',
    width: 300,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    borderRadius: 5
  },
  return: {
    height: 20,
    margin: 10,
    textAlign: 'left'
  }
});

export default style;
