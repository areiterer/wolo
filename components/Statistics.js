import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

import Progress from './Progress';
import GoalList from './GoalList';

class Statistics extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this._selectGoal = this._selectGoal.bind(this);
    this._renderPercentageView = this._renderPercentageView.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state._selectGoal && nextProps.goals) {
      if (nextProps.goals.length > 0)
        this.setState({
          selectedGoal: nextProps.goals[0].id
        });
    }
  }

  _selectGoal(goal) {
    this.setState({
      selectedGoal: goal,
    })
  }

  _renderPercentageView() {
    let selGoal = this.props.goals.find(g => g.id === this.state.selectedGoal);

    if (selGoal)
      return <Progress activities={this.props.activities} goal={selGoal}/>;
    else
      return null;

  }

  render() {
    return (
      this.props.goals.length > 0 ?
        <View style={{flex: 1, alignSelf: 'stretch'}}>

          <View style={{alignItems: 'center', margin: 30, marginTop:50}}>
            { this.state.selectedGoal ? this._renderPercentageView() : null}
          </View>

          { this.state.selectedGoal ?
            <GoalList
              goals={this.props.goals}
              onSelect={this._selectGoal}
              activeGoal={this.state.selectedGoal}
              onDelete={this.props.onDeleteGoal}/>
            : null }

        </View>
        : <Text style={{
          color: '#fff',
          alignSelf: 'stretch',
          flex: 1,
          fontSize: 17,
          textAlign: 'center',
          textAlignVertical: 'center'}}>You did not define goals yet, add one to start.</Text>

    )
  }
}


Statistics
  .propTypes = {
  goals: PropTypes.array.isRequired,
  activities: PropTypes.array.isRequired,
  onDeleteGoal: PropTypes.func.isRequired
};

export default Statistics;