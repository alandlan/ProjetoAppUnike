import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#91b8da',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  image: {
    flex: 2
  },
  login: {
    flex: 1
  },
  text: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    marginTop: 0
  }
});

export { style };
