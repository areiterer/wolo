import React, {Component, PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

import History from './History';

class Statistics extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, alignSelf: 'stretch'}}>
        <Button title={"Go to History"}
        onPress={() => this.props.navigator.replace({component: History}) }/>
        <Text>This is the statistics screen. It will be the main screen and entry point of the app</Text>
      </View>
    )
  }
}

Statistics.propTypes = {
  navigator: PropTypes.object.isRequired
};

export default Statistics;