import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import ActionButton from 'react-native-action-button';
import CustomTabBar from './TabBar/CustomTabBar';

import Statistics from './Statistics';
import History from './History';
import AddActivity from './AddActivity';

import * as Api from '../api';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: [],
      selectedTab: 0
    };

    this.addNewActivity = this.addNewActivity.bind(this);
    this.showAddModal = this.showAddModal.bind(this);
  }

  componentWillMount() {
    Api.getActivityList().then((activities) => {
      this.setState({
        activities: activities
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

  showAddModal() {
    this.props.navigator.push({
        type: 'Modal',
        component: AddActivity,
        passProps: {
          addNewActivity: this.addNewActivity
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
          <Statistics tabLabel="md-stats"/>
          <History
            activities={this.state.activities}
            navigator={this.props.navigator}
            tabLabel="md-list"/>
        </ScrollableTabView>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          offsetY={64}
          onPress={this.showAddModal}
        />
      </View>
    );
  }
}

export default Main;