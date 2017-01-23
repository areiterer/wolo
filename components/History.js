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
    this._renderListView = this._renderListView.bind(this);
    this._renderEmptyText = this._renderEmptyText.bind(this);
  }

  render() {
    return (
      <View style={{ alignSelf: 'stretch', flex: 1 }}>
        {this.props.activities.length > 0 ?
          this._renderListView()
          : this._renderEmptyText()
        }
      </View>
    );
  };

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
        id={rowData.id}
        type={rowData.type.name}
        date={rowData.date ? new Date(rowData.date).toLocaleDateString() : 'n/A'}
        amount={rowData.amount}
        unit={rowData.type.unit}
        duration={rowData.duration}
        iconName={rowData.type.icon}
        onDelete={this.props.onDeleteActivity}
      />
    );
  }

  _renderListView() {
    return <ListView
      style={{ alignSelf: 'stretch' }}
      dataSource={this.ds.cloneWithRows(this.props.activities)}
      enableEmptySections={true}
      renderRow={this._renderRow}
      renderSeparator={this._renderSeparator}
    />
  }

  _renderEmptyText() {
    return (
      <Text style={{
        alignSelf: 'stretch',
        textAlign: 'center',
        margin: 50,
        color: '#fff',
        fontSize: 17
      }}>{"The log book is empty, let's fill it!"}</Text>
    );
  }
}

History.propTypes = {
  navigator: PropTypes.object.isRequired,
  activities: PropTypes.array.isRequired,
  onDeleteActivity: PropTypes.func.isRequired
};

export default History;