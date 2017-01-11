import React, { Component } from 'react';
import {
  Text,
  View,
  ListView
} from 'react-native';

import ActivityItem from './ActivityItem';
import AddButton from './AddButton';

import { sampleActivities } from '../sampleData';


class History extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(sampleActivities)
    };

    this.addNewActivity = this.addNewActivity.bind(this);
  }

  addNewActivity() {
    alert('TODO: Add new item');
  }

  render() {
    return (
      <View style={{ alignSelf: 'stretch', flex: 1 }}>
        <ListView
          style={{ alignSelf: 'stretch' }}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
          <ActivityItem
            type={rowData.type}
            date={rowData.date}
            amount={rowData.amount}
            unit={rowData.unit}
            duration={rowData.duration}
          />
        }
        />
        <AddButton onAdd={this.addNewActivity} />
      </View>
    );
  }
}

export default History;