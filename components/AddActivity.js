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

const activityTypes = [
  {
    name: 'Running',
    unit: 'km'
  },
  {
    name: 'Cycling',
    unit: 'km'
  },
  {
    name: 'Burpees',
    unit: 'reps'
  }
];


class AddActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: activityTypes[0],
      date: new Date(),
      amount: 0,
      duration: 0
    };

    this.getActivity = this.getActivity.bind(this);
  }

  getActivity() {
    return {
      type: this.state.type,
      date: this.state.date,
      amount: this.state.amount,
      duration: this.state.duration
    }
  }

  showPicker = async(stateKey, options) => {
    try {
      var newState = {};
      const { action, year, month, day } = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({ code, message }) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };


  render() {
    return (
      <View style={{margin: 25}}>
        <Text style={{margin: 10, textAlign: 'center', fontSize:20}}>Add a new activity</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Type: </Text>
          <Picker style={{flex: 3, height:40, marginRight:21}}
                  prompt={'Type'}
                  selectedValue={this.state.type}
                  onValueChange={(type) => this.setState({type: type})}>
            {activityTypes.map(type =>
              <Picker.Item label={type.name}
                           value={type}
                           key={type.name}/>
            )}
          </Picker>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Date: </Text>
          <TouchableWithoutFeedback
            onPress={this.showPicker.bind(this, 'spinner', {date: this.state.date, mode: 'spinner'})}>
            <View
              style={{flex:3, height:40}}>
              <Text
                style={{paddingLeft:3, height: 40, textAlignVertical: 'center', color: 'black' }}>{this.state.date.toLocaleDateString()}</Text>
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

        <View style={styles.row}>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={ () => this.props.addNewActivity(this.getActivity()) }>
            <Text style={styles.flatButton}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1}}
            color={'#E74C3C'}
            onPress={ () => this.props.navigator.pop() }>
            <Text
              style={styles.flatButton}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 2,
    marginBottom: 2
  },
  label: {
    flex: 1,
    textAlignVertical: 'center',
    height: 40
  },
  unit: {
    flex: 1,
    textAlignVertical: 'center',
    height: 40,
    textAlign: 'center'
  },
  flatButton: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 40,
    fontWeight: 'bold',
    color: 'green'
  }
});

AddActivity.propTypes = {
  navigator: PropTypes.object.isRequired
};

export default AddActivity;