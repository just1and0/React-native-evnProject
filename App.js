/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View} from 'react-native';
import {API_KEY} from 'react-native-dotenv';

export default (App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{API_KEY}</Text>
    </View>
  );
});
