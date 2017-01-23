import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  findNodeHandle,
  UIManager
} from 'react-native';

import GoalButton from './GoalButton';

class GoalList extends Component {
  render() {
    return <View>
      {
        this.props.goals.map((goal) => {
          return <GoalButton
            key={goal.id}
            active={goal.id === this.props.activeGoal}
            goal={goal}
            onDelete={this.props.onDelete}
            onSelect={this.props.onSelect}
          />
        })
      }
    </View>
  }
}


GoalList.propTypes = {
  goals: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  activeGoal: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default GoalList;