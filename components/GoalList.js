import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class GoalList extends Component {
  render() {
    return <View>
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
  }
}

const styles = StyleSheet.create({
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
});

GoalList.propTypes = {
  goals: PropTypes.array.isRequired
};

export default GoalList;