import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

import PercentageCircle from 'react-native-percentage-circle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import GoalList from './GoalList';

class Statistics extends Component {
  render() {
    return (
      <View style={{flex: 1, alignSelf: 'stretch'}}>
        <View style={{alignItems: 'center', margin: 30, marginTop:50}}>
          <PercentageCircle
            radius={130}
            percent={40}
            color={"#CDDC39"}
            borderWidth={"5"}
            bgcolor={"#757575"}
            innerColor={'#455A64'}>
            <Icon style={styles.activityIcon} name="run" size={70} color="#fff"/>
            <Text style={{fontSize: 30, lineHeight:40, color: '#fff'}}>40%</Text>
            <Text style={{color: '#fff'}}>160 km running</Text>
          </PercentageCircle>
        </View>

        <GoalList goals={this.props.goals} />
      </View>
    )
  }
}

const styles = {
  title: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10
  },
  activityIcon: {
    padding: 10,
  }
};

Statistics.propTypes = {
  goals: PropTypes.array.isRequired
};

export default Statistics;