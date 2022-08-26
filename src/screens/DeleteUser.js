// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to delete the user

import React, {useState} from 'react';
import {Text, View, Alert} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

import Mytextinput from '../components/Mytextinput.js';
import Mybutton from '../components/Mybutton';
import styles from '../constants/styles.js'

var db = openDatabase({name: 'UserDatabase.db'});

const DeleteUser = ({navigation}) => {
  let [inputUserId, setInputUserId] = useState('');

  let deleteUser = () => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User deleted successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              {cancelable: false},
            );
          } else {
            alert('Please insert a valid User Id');
          }
        },
      );
    });
  };


  //Not my code so the bottom part stays
  return (
    <View style={styles.screenColour}>
        <View style={{flex: 1}}>
          <Mytextinput
            placeholder="Enter User Id"
            onChangeText={inputUserId => setInputUserId(inputUserId)}
            style={{padding: 10}}
          />
          <Mybutton title="Delete User" customClick={deleteUser} />
        </View>
        <Text
          style={styles.centreGrey18}>
          Example of SQLite Database in React Native
        </Text>
        <Text
          style={styles.centreGrey16}>
          www.aboutreact.com
        </Text>
      </View>
  );
};

export default DeleteUser;
