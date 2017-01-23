import React, { Component, PropTypes } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  UIManager,
  findNodeHandle
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class ActivityItem extends Component {
  constructor(props) {
    super(props);

    this.touchable = null;
  }

  render() {
    return (
      <TouchableNativeFeedback
        onLongPress={() => {
        UIManager.showPopupMenu(
                  findNodeHandle(this.touchable),
                  ["Delete activity"],
                  () => console.log("something went wrong with the popup menu"),
                  (e, i)=> {
                    if(e === 'itemSelected' && i === 0)
                      this.props.onDelete(this.props.id);
                  },
                );
      }}>
        <View
          ref={(ctrl) => {this.touchable = ctrl}}
          style={styles.container}>
          <Icon style={styles.activityIcon} name={this.props.iconName} size={35} color="#fff"/>
          <View style={{flex: 1}}>
            <Text style={styles.details}>{this.props.date}</Text>
            <Text style={styles.details}>{this.props.type}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={styles.details}>{this.props.amount + ' ' + this.props.unit}</Text>
            {this.props.duration && <Text style={styles.details}>{this.props.duration + ' mins'}</Text>}
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    margin: 5,
    padding: 10,
    flexDirection: 'row',
  },
  details: {
    fontSize: 17,
    textAlignVertical: 'center',
    flex: 1,
    color: '#fff'
  },
  activityIcon: {
    marginTop: 8,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
  }
});

ActivityItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  duration: PropTypes.number,
  iconName: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ActivityItem;