import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import ActionButton from 'react-native-action-button';
import CustomTabBar from './TabBar/CustomTabBar';

import Statistics from './Statistics';
import History from './History';
import AddActivity from './AddActivity';
import AddGoal from './AddGoal';

import * as Api from '../lib/api';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: [],
      goals: [],
      activityTypes: [],
      selectedTab: 0
    };

    this.addNewActivity = this.addNewActivity.bind(this);
    this.addNewGoal = this.addNewGoal.bind(this);
    this.showAddActivityModal = this.showAddActivityModal.bind(this);
    this.showAddGoalModal = this.showAddGoalModal.bind(this);
  }

  componentWillMount() {
    Api.getActivityList().then((activities) => {
      this.setState({
        activities: activities
      })
    });

    Api.getGoals().then((goals) => {
      this.setState({
        goals: goals
      })
    });

    Api.getActivityTypes().then((types) => {
      this.setState({
        activityTypes: types
      })
    });
  }

  addNewActivity(activity) {
    Api.saveActivity(activity, act =>
      this.setState({
        activities: [...this.state.activities, act]
      }));

    this.props.navigator.pop();
    this.setState({
      selectedTab: 1
    })
  }

  addNewGoal(goal) {
    Api.saveGoal(goal, g =>
      this.setState({
        goals: [...this.state.goals, g]
      }));

    this.props.navigator.pop();
    this.setState({
      selectedTab: 0
    })
  }

  showAddActivityModal() {
    this.props.navigator.push({
        type: 'Modal',
        component: AddActivity,
        passProps: {
          activityTypes: this.state.activityTypes,
          addNewActivity: this.addNewActivity
        }
      }
    )
  }

  showAddGoalModal() {
    this.props.navigator.push({
        type: 'Modal',
        component: AddGoal,
        passProps: {
          activityTypes: this.state.activityTypes,
          addNewGoal: this.addNewGoal
        }
      }
    )
  }

  render() {
    return (
      <View style={{alignSelf: 'stretch', flex: 1}}>
        <ScrollableTabView renderTabBar={() => <CustomTabBar />}
                           tabBarPosition="bottom"
                           page={this.state.selectedTab}>
          <Statistics
            goals={this.state.goals}
            tabLabel="md-stats"/>
          <History
            activities={this.state.activities}
            navigator={this.props.navigator}
            tabLabel="md-list"/>
        </ScrollableTabView>

        {/*buttonColor="rgba(231,76,60,1)"*/}
        <ActionButton
          buttonColor="#CDDC39"
          offsetY={56}>
          <ActionButton.Item buttonColor='#F0F4C3' title="Log activity" onPress={this.showAddActivityModal}>
            <Icon name="check" style={styles.actionButtonIcon}/>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#F0F4C3' title="Set new goal" onPress={this.showAddGoalModal}>
            <Icon name="check" style={styles.actionButtonIcon}/>
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: '#212121',
  },
});

export default Main;