// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native

import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

import styles from '../constants/styles.js'
import Mybutton from '../components/Mybutton';
import Mytext from '../components/Mytext.js';

//this is for testing push.
var db = openDatabase({name: 'UserDatabase.db'});

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
  }, []);

  return (
    <View style={styles.screenColour}>
        <View style={{flex: 1}}>
          <Mytext text="SQLite Example" />
          <Mybutton
            title="Register"
            customClick={() => navigation.navigate('RegisterUser')}
          />
          <Mybutton
            title="Update"
            customClick={() => navigation.navigate('UpdateUser')}
          />
          <Mybutton
            title="View"
            customClick={() => navigation.navigate('ViewUser')}
          />
          <Mybutton
            title="View All"
            customClick={() => navigation.navigate('ViewAllUser')}
          />
          <Mybutton
            title="Delete"
            customClick={() => navigation.navigate('DeleteUser')}
          />
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

export default HomeScreen;
