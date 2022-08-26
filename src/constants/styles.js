import {StyleSheet} from 'react-native';

export const colours = {
  headerBackgroundColoring: '#F78400',
  generalBackgroundColoring: '#f7f6f6',
  red: 'red',
  white: 'white',
  inputBorderColour: '#000000',
};

export default StyleSheet.create({
  headerBackgroundColor: {
    backgroundColor: colours.headerBackgroundColoring,
  },
  generalBackgroundColor: {
    backgroundColor: colours.headerBackgroundColoring,
  },
  headerTintColor: {
    headerTintColor: colours.red,
  },
  screenColour: {flex: 1, backgroundColor: colours.white},
  centreGrey18: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  centreGrey16: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
  textInput: {
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    borderColor: colours.inputBorderColour,
    borderWidth: 1,
  },

  textInputContainer: {
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    borderColor: '#007FFF',
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f05555',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
  },
  buttonText: {
    color: '#ffffff',
  },
  textText: {
    color: '#111825',
    fontSize: 18,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
  },
});
