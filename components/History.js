import React, { Component } from 'react';
import {
  Text,
  ListView
} from 'react-native';

import ActivityItem from './ActivityItem';
import { sampleActivities } from '../sampleData';


class History extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(sampleActivities)
    };
  }

  render() {
    return (
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
    );
  }
}

export default History;