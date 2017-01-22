import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

import PercentageCircle from 'react-native-percentage-circle';
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

        {
          this.props.goals.map((goal) => {
            return (
              <View key={goal.id}
                    style={styles.activityRow}>
                <Icon style={styles.activityIcon} name={goal.type.icon} size={40} color="#fff"/>
                <Text style={styles.activityText}>{
                  goal.type.unit === 'km' ?
                    goal.amount + ' km ' + goal.type.name
                    : goal.amount + ' ' + goal.type.name
                }
                </Text>
              </View>
            );
          })
        }
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

Statistics.propTypes = {
  goals: PropTypes.array.isRequired
};

export default Statistics;