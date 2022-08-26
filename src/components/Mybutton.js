// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Custom Button

import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from '../constants/styles.js';

const Mybutton = props => {
  return (
    <Pressable style={styles.button} onPress={props.customClick}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </Pressable>
  );
};

export default Mybutton;
