import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  ListView,
  Button
} from 'react-native';

import Statistics from './Statistics';
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
    this.props.navigator.push({
      name: 'Statistics'
    })
  }

  render() {
    return (
      <View style={{ alignSelf: 'stretch', flex: 1 }}>
        <Button title={"Go to Statistic"}
                onPress={() => this.props.navigator.replace({component: Statistics}) }/>
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

History.propTypes = {
  navigator: PropTypes.object.isRequired
};

export default History;