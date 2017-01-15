import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import ActionButton from 'react-native-action-button';
import CustomTabBar from './TabBar/CustomTabBar';

import Statistics from './Statistics';
import History from './History';
import AddActivity from './AddActivity';


class Main extends Component {
  constructor(props) {
    super(props);
    this.addNewActivity = this.addNewActivity.bind(this);
  }

  addNewActivity() {
    this.props.navigator.push({
      type: 'Modal',
      component: AddActivity
    })
  }

  render() {
    return (
      <View style={{alignSelf: 'stretch', flex: 1}}>
        <ScrollableTabView renderTabBar={() => <CustomTabBar />}
          tabBarPosition="bottom">
          <Statistics tabLabel="md-stats"/>
          <History navigator={this.props.navigator} tabLabel="md-list"/>
        </ScrollableTabView>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          offsetY={64}
          onPress={this.addNewActivity}
        />
      </View>
    );
  }
}

export default Main;