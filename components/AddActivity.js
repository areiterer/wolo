import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  Picker,
  TouchableWithoutFeedback,
  DatePickerAndroid,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


class AddActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.activityTypes[0],
      date: new Date(),
      amount: 0,
      duration: 0
    };

    this.getActivity = this.getActivity.bind(this);
    this._onActionSelected = this._onActionSelected.bind(this);
  }

  getActivity() {
    return {
      type: this.state.type,
      date: this.state.date,
      amount: this.state.amount,
      duration: this.state.duration
    }
  }

  showPicker = async(options) => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open(options);
      if (action !== DatePickerAndroid.dismissedAction) {
        const date = new Date(year, month, day);
        this.setState({date: new Date(date)});
      }
    } catch ({ code, message }) {
      console.warn('Error:', message);
    }
  };

  _onActionSelected = (position) => {
    switch (toolbarActions[position].title) {
      case "Save":
        this.props.addNewActivity(this.getActivity());
        return;
      default:
        return;
    }
  };

  render() {
    return (
      <View style={styles.modal}>
        <Icon.ToolbarAndroid
          title="Add new activity"
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
          <Text style={styles.label}>Date: </Text>
          <TouchableWithoutFeedback
            onPress={this.showPicker.bind(this, {date: this.state.date, mode: 'spinner'})}>
            <View
              style={{flex:3, height:40}}>
              <Text
                style={{paddingLeft:3, height: 40, textAlignVertical: 'center', color: 'black' }}>
                {this.state.date.toLocaleDateString()}
                </Text>
            </View>
          </TouchableWithoutFeedback>
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

        <View style={styles.row}>
          <Text style={styles.label}>Duration: </Text>
          <View style={{flex: 3, flexDirection:'row', height:40}}>
            <TextInput
              style={{flex: 3, height:40}}
              placeholder={'Duration (Minutes)'}
              keyboardType={'numeric'}
              onChangeText={(text) =>{this.setState({duration: Number(text)})}}
              value={this.state.duration.toString()}/>
            <Text
              style={styles.unit}>min</Text>
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
  toolbar: {
    backgroundColor: '#455A64',
    height: 56,
    elevation: 2
  },
});

AddActivity.propTypes = {
  navigator: PropTypes.object.isRequired,
  activityTypes: PropTypes.array.isRequired,
  addNewActivity: PropTypes.func.isRequired
};

export default AddActivity;