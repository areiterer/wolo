import React, { Component, PropTypes } from 'react';

import { View, Text, StyleSheet } from 'react-native';

class ActivityItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={styles.details}>{this.props.date}</Text>
          <Text style={styles.details}>{this.props.type}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={styles.details}>{this.props.amount + ' ' + this.props.unit}</Text>
          {this.props.duration && <Text style={styles.details}>{this.props.duration + ' mins'}</Text>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    margin: 5,
    padding: 10,
    backgroundColor: 'gray',
    flexDirection: 'row'
  },
  details: {
    fontSize: 18,
    textAlignVertical: 'center',
    flex: 1,
  }
});

ActivityItem.propTypes = {
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  duration: PropTypes.number
};

export default ActivityItem;