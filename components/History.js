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

    this._renderRow = this._renderRow.bind(this);
    this._renderSeparator = this._renderSeparator.bind(this);
  }

  render() {
    return (
      <View style={{ alignSelf: 'stretch', flex: 1 }}>
        <ListView
          style={{ alignSelf: 'stretch' }}
          dataSource={this.ds.cloneWithRows(this.props.activities)}
          enableEmptySections={true}
          renderRow={this._renderRow}
          renderSeparator={this._renderSeparator}
        />
      </View>
    );
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#BDBDBD',
        }}
      />
    );
  }

  _renderRow(rowData) {
    return (
      <ActivityItem
        type={rowData.type.name}
        date={rowData.date ? new Date(rowData.date).toLocaleDateString() : 'n/A'}
        amount={rowData.amount}
        unit={rowData.type.unit}
        duration={rowData.duration}
      />
    );
  }
}

History.propTypes = {
  navigator: PropTypes.object.isRequired,
  activities: PropTypes.array.isRequired
};

export default History;