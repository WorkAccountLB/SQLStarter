// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Custom Text

import React from 'react';
import {Text} from 'react-native';
import styles from '../constants/styles.js';

const Mytext = props => {
  return <Text style={styles.textText}> {props.text}</Text>;
};

export default Mytext;
