import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    flex: 1,
    margin: 10,
    justifyContent: 'center'
  },
  label: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    marginHorizontal: 20,
    marginTop: 10
  },
  date: {
    width: 300,
    marginHorizontal: 20,
    marginTop: 10
  },
  button: {
    fontSize: 28,
    fontWeight: '400',
    width: 300,
    marginHorizontal: 20,
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
