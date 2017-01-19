import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

import PercentageCircle from './Circle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//http://paletton.com/palette.php?uid=53K130ktQevWnuwDUnUld8daM2u

class Statistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, alignSelf: 'stretch'}}>
        <View style={{alignItems: 'center', margin: 30, marginTop:50}}>
          <PercentageCircle
            radius={130}
            percent={60}
            color={"#CDDC39"}
            borderWidth={"5"}
            bgcolor={"#757575"}
            innerColor={'#455A64'}>
            <Icon style={styles.activityIcon} name="run" size={70} color="#fff"/>
            <Text style={{fontSize: 30, lineHeight:40, color: '#fff'}}>50%</Text>
            <Text style={{color: '#fff'}}>200 km running</Text>
          </PercentageCircle>
        </View>

        <View style={styles.activityRow}>
          <Icon style={styles.activityIcon} name="run" size={40} color="#fff"/>
            <Text style={styles.activityText}>400 km running</Text>
        </View>
        <View style={styles.activityRow}>
          <Icon style={styles.activityIcon} name="bike" size={40} color="#fff"/>
          <Text style={styles.activityText}>1000 km cycling</Text>
        </View>
        <View style={styles.activityRow}>
          <Icon style={styles.activityIcon} name="counter" size={40} color="#fff"/>
          <Text style={styles.activityText}>10000 burpees</Text>
        </View>
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
  activityRow: {
    flexDirection: 'row',
    paddingLeft: 100,
    paddingRight: 80,
    margin: 2
  },
  activityText: {
    textAlignVertical: 'center',
    flex: 2,
    height: 65,
    paddingLeft: 20,
    color: '#fff'
  },
  activityIcon: {
    padding: 10,
  }
};

export default Statistics;