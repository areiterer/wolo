import React, { Component, PropTypes } from 'react';
import {
  Text,
  View
} from 'react-native';

import PercentageCircle from './Circle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Progress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 0,
      totalAmount: 0
    }
  }

  componentWillMount() {
    this._calculatePercentage(this.props.goal, this.props.activities)
  }

  componentWillReceiveProps(nextProps) {
    this._calculatePercentage(nextProps.goal, nextProps.activities)
  }

  _calculatePercentage(goal, activities) {
    let sumAmount = 0;
    let percentage = 0;

    if (goal) {
      filteredActivities = activities
        .filter(a => a.type.name === goal.type.name);

      if (filteredActivities.length > 0)
        sumAmount = filteredActivities.reduce((a, b) => Number(a.amount) + Number(b.amount));
      if (filteredActivities.length === 1)
        sumAmount = filteredActivities[0].amount;

      percentage = sumAmount * 100 / goal.amount;

      this.setState({
        percentage: percentage,
        totalAmount: sumAmount
      });
    }
  }

  render() {
    return (
      this.props.goal ?
        <PercentageCircle
          radius={130}
          percent={this.state.percentage}
          color={"#CDDC39"}
          borderWidth={"5"}
          bgcolor={"#757575"}
          innerColor={'#455A64'}>
          <Icon style={styles.activityIcon} name={this.props.goal.type.icon} size={70} color="#fff"/>
          <Text style={{fontSize: 30, lineHeight:40, color: '#fff'}}>{this.state.percentage}%</Text>
          <Text style={{color: '#fff'}}>{this.state.totalAmount + ' ' + this.props.goal.type.unit}</Text>
        </PercentageCircle>
        : null
    )
  }
}

const styles = {
  activityIcon: {
    padding: 10,
  }
};

Progress.propTypes = {
  goal: PropTypes.object.isRequired,
  activities: PropTypes.array.isRequired
};

export default Progress;