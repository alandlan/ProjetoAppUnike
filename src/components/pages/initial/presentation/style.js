import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    margin: 10
  },
  logo: {
    height: 80,
    justifyContent: 'center'
  },
  banner: {
    width: '100%',
    height: '100%'
  },
  message: {
    flexDirection: 'column',
    marginBottom: 10
  },
  messageTitle: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  messageText: {
    lineHeight: 25,
    textAlign: 'center'
  },
  action: {
    height: 110,
    justifyContent: 'space-between',
    flexDirection: 'column'
  }
});

export default style;
