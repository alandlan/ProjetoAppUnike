import { StyleSheet } from 'react-native';
import { Left } from 'native-base';

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    marginHorizontal: 20
  },
  header: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5
  },
  input: {
    borderWidth: 0,
    borderColor: '#ccc',
    marginTop: 10
  },
  obs: {
    textAlign: 'center'
  },
  button: {
    marginTop: 10,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    borderRadius: 10,
    height: 50
  },
  return: {
    height: 20,
    margin: 10,
    justifyContent: 'flex-end'
  }
});

export default style;
