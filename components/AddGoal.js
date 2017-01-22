import React, { Component, PropTypes } from 'react';

import {
  Text,
  View,
  TextInput,
  Picker,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class AddGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.activityTypes[0],
      amount: 0,
    };

    this._onActionSelected = this._onActionSelected.bind(this);
    this._getGoal = this._getGoal.bind(this);
  }

  _getGoal() {
    return {
      type: this.state.type,
      amount: this.state.amount
    };
  }

  _onActionSelected = (position) => {
    switch (toolbarActions[position].title) {
      case "Save":
        this.props.addNewGoal(this._getGoal());
        return;
      default:
        return;
    }
  };

  render() {
    return (
      <View style={styles.modal}>
        <Icon.ToolbarAndroid
          title="Set a new goal"
          titleColor="white"
          navIconName="md-arrow-back"
          onIconClicked={this.props.navigator.pop}
          style={styles.toolbar}
          actions={toolbarActions}
          onActionSelected={this._onActionSelected}
          overflowIconName="md-more"
        />
        <View style={styles.row}>
          <Text style={styles.label}>Type: </Text>
          <Picker style={{flex: 3, height:40, marginRight:21}}
                  prompt={'Type'}
                  selectedValue={this.state.type}
                  onValueChange={(type) => this.setState({type: type})}>
            {this.props.activityTypes.map(type =>
              <Picker.Item label={type.name}
                           value={type}
                           key={type.name}/>
            )}
          </Picker>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Amount: </Text>
          <View style={{flex: 3, flexDirection:'row', height:40}}>
            <TextInput
              style={{flex: 3, height:40}}
              placeholder={'Amount'}
              keyboardType={'numeric'}
              onChangeText={(text) =>{this.setState({amount: Number(text)})}}
              value={this.state.amount.toString()}/>
            <Text
              style={styles.unit}>{this.state.type ? this.state.type.unit : 'n/A'}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const toolbarActions = [
  { title: 'Save', iconName: 'md-send', iconSize: 25, show: 'always' }
];

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#455A64',
    height: 56,
    elevation: 2
  },
  row: {
    flexDirection: 'row',
    marginTop: 2,
    marginBottom: 2,
    paddingLeft: 10,
    paddingRight: 10
  },
  label: {
    flex: 1,
    textAlignVertical: 'center',
    height: 40,
    color: '#212121'
  },
  unit: {
    flex: 1,
    textAlignVertical: 'center',
    height: 40,
    textAlign: 'center',
    color: '#212121'
  },
});

AddGoal.propTypes = {
  navigator: PropTypes.object.isRequired,
  activityTypes: PropTypes.array.isRequired,
  addNewGoal: PropTypes.func.isRequired
};

export default AddGoal;