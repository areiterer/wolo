import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  UIManager,
  findNodeHandle
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class GoalButton extends Component {
  constructor(props) {
    super(props);
    this.touchable = null;
  }

  render() {
    let goal = this.props.goal;

    return (
      <TouchableNativeFeedback
        onPress={() => this.props.onSelect(goal.id)}
        onLongPress={() => {

                UIManager.showPopupMenu(
                  findNodeHandle(this.touchable),
                  ["Delete goal"],
                  () => console.log("something went wrong with the popup menu"),
                  (e, i)=> {
                    if(e === 'itemSelected' && i === 0)
                      this.props.onDelete(goal.id);
                  },
                );

              }}>
        <View ref={(ctrl) => { this.touchable = ctrl; }}
              style={[styles.activityRow, {backgroundColor: this.props.active ? 'transparent' : 'transparent'}]}>
          <Icon style={styles.activityIcon} name={goal.type.icon} size={40}
                color={this.props.active ? '#CDDC39' : '#fff'}/>
          <Text style={[styles.activityText, {color: this.props.active ? '#CDDC39' : '#fff'}]}>{
            goal.type.unit === 'km' ?
              goal.amount + ' km ' + goal.type.name
              : goal.amount + ' ' + goal.type.name
          }
          </Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

GoalButton.propTypes = {
  goal: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  activityRow: {
    flexDirection: 'row',
    paddingLeft: 100,
    paddingRight: 80,
    margin: 2
  },
  activityText: {
    textAlignVertical: 'center',
    flex: 2,
    height: 65,
    paddingLeft: 20,
    color: '#fff'
  },
  activityIcon: {
    padding: 10,
  }
});

export default GoalButton;