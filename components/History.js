import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  ListView,
  Button,
  StyleSheet
} from 'react-native';

import ActivityItem from './ActivityItem';


class History extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  render() {
    return (
      <View style={{ alignSelf: 'stretch', flex: 1 }}>
        <ListView
          style={{ alignSelf: 'stretch' }}
          dataSource={this.ds.cloneWithRows(this.props.activities)}
          enableEmptySections={true}
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
      </View>
    );
  }
}

History.propTypes = {
  navigator: PropTypes.object.isRequired,
  activities: PropTypes.array.isRequired
};

export default History;