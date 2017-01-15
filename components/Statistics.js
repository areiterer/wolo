import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

class Statistics extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, alignSelf: 'stretch'}}>
        <Text>This is the statistics screen. It will be the main screen and entry point of the app</Text>
      </View>
    )
  }
}

export default Statistics;